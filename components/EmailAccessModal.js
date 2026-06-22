import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { MdEmail } from "react-icons/md";

export default function EmailAccessModal({ project, isOpen, onOpenChange }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Request Access to Repository</ModalHeader>
            <ModalBody>
              <p>
                To request access to the <strong>{project?.title}</strong> repository, please email me.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                data-analytics-click="request_access_close"
                data-analytics-props={JSON.stringify({
                  project_id: project?.id,
                  project_title: project?.title,
                  source: "request_access_modal",
                  intent: "dismiss_request_access",
                  destination_type: "modal",
                  destination_label: "close",
                })}
              >
                Close
              </Button>
              <Button
                color="primary"
                endContent={<MdEmail size={18} />}
                href={`mailto:${siteConfig.email}?subject=Requesting Access to Repository&body=Hi Jeremy,%0D%0A%0D%0AI would like to request access to the "${project?.title}" repository.%0D%0A%0D%0AMy GitHub username is: [Your GitHub Username]%0D%0A%0D%0AThank you!`}
                as={Link}
                data-analytics-click="request_access_email_click"
                data-analytics-props={JSON.stringify({
                  project_id: project?.id,
                  project_title: project?.title,
                  source: "request_access_modal",
                  intent: "contact_for_repository_access",
                  destination_type: "mailto",
                  destination_label: "email",
                  destination_url: `mailto:${siteConfig.email}`,
                })}
              >
                Email me
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
