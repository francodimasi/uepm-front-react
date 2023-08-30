
import patient from "public/images/features/patient.svg";
import { ResourceItem } from "../types/resource.type";
import { Resource } from "./Resource";

const resources: ResourceItem[] = [
  {
    name: "Contacts",
    description:
      "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
    icon: patient,
  },
  {
    name: "Conversations",
    description:
      "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
    icon: patient,
  },
  {
    name: "Messages",
    description:
      "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
    icon: patient,
  },
  {
    name: "Groups",
    description:
      "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
    icon: patient,
  },
  {
    name: "Messages",
    description:
      "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
    icon: patient,
  },
  {
    name: "Groups",
    description:
      "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
    icon: patient,
  },
];

export function Resources() {
  return (
    <div>
      {/* <h1>Resources</h1> */}
      <div className="grid grid-cols-3 gap-6 dark">
        {resources.map((resource, index) => (
          <Resource key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}
