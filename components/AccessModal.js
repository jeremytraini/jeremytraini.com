import React, { useState, useRef, useEffect } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { TbBrandGithub } from "react-icons/tb";
import axios from "axios";

export default function AccessModal({ project, isOpen, onOpenChange }) {
  const usernameRef = useRef("");
  const codeRef = useRef("");
  const [usernameError, setUsernameError] = useState("");
  const [codeError, setCodeError] = useState("");


  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Get code from query params if it exists
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      codeRef.current = code;
    }
  }, []);

  const clearForm = () => {
    setUsernameError("");
    setCodeError("");
    setIsLoading(false);
    setIsStatusModalOpen(false);
    setIsSuccess(false);
  }

  useEffect(() => {
    clearForm();
  }, [isOpen]);

  const onSubmit = () => {
    setIsLoading(true);
    setUsernameError("");
    setCodeError("");

    let errorFlag = false;

    // Check if username is valid
    if (usernameRef.current === "") {
      setUsernameError("Please enter your Github username");
      errorFlag = true;
    } else {
      setUsernameError("");
    }

    // Check if code is valid
    if (codeRef.current.length === 0) {
      setCodeError("Please enter your code");
      errorFlag = true;
    } else {
      setCodeError("");
    }

    if (errorFlag) {
      setIsLoading(false);
      return;
    };

    // Send request to backend
    axios.post(`/api/requestAccess`,
      {
        repo: project.githubRepo,
        username: usernameRef.current,
        code: codeRef.current
      }
    )
    .then(response => {
      return response.data;
    })
    .then(data => {
      setIsSuccess(true);
      setIsStatusModalOpen(true);
    })
    .catch(error => {
      if (error.response.status === 401) {
        setCodeError("This code is not valid, please try again");
      } else if (error.response.status === 404) {
        setUsernameError("This username was not found on Github, please try again");
      } else {
        setIsSuccess(false);
        setIsStatusModalOpen(true);
      }
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      {!isStatusModalOpen
      ? (<ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Request access to the &quot;{project?.title}&quot; repository</ModalHeader>
              <ModalBody>
                <p>This feature is only available if you have a secret access code from my resume.</p>
                <p>You should also have a Github account.</p>
                <Input
                  isRequired
                  label="Username"
                  placeholder="Enter your Github username"
                  labelPlacement="outside"
                  width="100%"
                  className="mt-4"
                  startContent={<TbBrandGithub color="gray" size={22} />}
                  onChange={(e) => {
                    usernameRef.current = e.target.value;
                    setUsernameError("");
                  }}
                  errorMessage={usernameError}
                  isInvalid={usernameError.length !== 0}
                />
                <Input
                  isRequired
                  label="Code"
                  placeholder="Enter the secret code"
                  labelPlacement="outside"
                  width="100%"
                  className="mt-4"
                  onChange={(e) => {
                    codeRef.current = e.target.value;
                    setCodeError("");
                  }}
                  defaultValue={codeRef.current}
                  errorMessage={codeError}
                  isInvalid={codeError.length !== 0}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onSubmit}
                  isLoading={isLoading}
                  isDisabled={usernameError.length !== 0 || codeError.length !== 0}
                >
                  Request Access
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      ) : (
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {isSuccess ? 'Success!' : 'Sorry, there was an error'}
              </ModalHeader>
              <ModalBody>
                {isSuccess
                ? (<>
                    <p>You&apos;ve been granted read access to the &quot;{project.githubRepo}&quot; repo.</p>
                    <p>You should receive an email from Github shortly.</p>
                  </>)
                : <p>There was a problem on Github&apos;s side so I couldn&apos;t add you to the repo.</p>
                }
              </ModalBody>
              <ModalFooter>
                {!isSuccess
                ? (
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                ) : (
                  <Button color="primary" variant="solid" onPress={onClose}>
                    Done
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      )}
    </Modal>
  );
}
