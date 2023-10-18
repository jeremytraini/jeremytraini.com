import React from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { TbBrandGithub } from "react-icons/tb";

export default function AccessModal({ isOpen, onOpenChange }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Request access to the repository</ModalHeader>
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
                // errorMessage="Not a valid Github user"
              />
              <Input
                isRequired
                label="Code"
                placeholder="Enter the secret code"
                labelPlacement="outside"
                width="100%"
                className="mt-4"
                // errorMessage="Not a valid code"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Request Access
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
