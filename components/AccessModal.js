import React, { useState, useRef, useEffect } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { TbBrandGithub } from "react-icons/tb";
import axios from "axios";

export default function AccessModal({ project, isOpen, onOpenChange }) {
  const usernameRef = useRef("");
  const codeRef = useRef("");
  const [usernameError, setUsernameError] = useState("");
  const [codeError, setCodeError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setUsernameError("");
    setCodeError("");
    setIsLoading(false);
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
      setUsernameError("Please enter a Github username");
      errorFlag = true;
    } else {
      setUsernameError("");
    }

    // Check if code is valid
    if (codeRef.current.length !== 6) {
      setCodeError("Please enter a code");
      errorFlag = true;
    } else {
      setCodeError("");
    }

    if (errorFlag) return;

    // Send request to backend
    axios.post(`/api/requestAccess`,
      {
        username: usernameRef.current,
        code: codeRef.current
      }
    )
    .then(response => {
      return response.data;
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error.response);
      if (error.response.status === 401) {
        setCodeError("This code is not valid, please try again");
      } else if (error.response.status === 400) {
        setUsernameError("This username is not valid, please try again");
      }
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Request access to the "{project?.title}" repository</ModalHeader>
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
    </Modal>
  );
}
