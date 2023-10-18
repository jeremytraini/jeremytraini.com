import React from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function AccessModal({ isOpen, onOpenChange }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Request access to the repository</ModalHeader>
            <ModalBody>
              <p> 
                This feature is only available if you have a secret access code from my resume.
                You should also have a Github account.
              </p>
              <Input
                label="Username"
                placeholder="Enter your Github username"
                width="100%"
                className="mt-4"
              />
              <Input
                label="Code"
                placeholder="Enter the secret code"
                width="100%"
                className="mt-4"
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
