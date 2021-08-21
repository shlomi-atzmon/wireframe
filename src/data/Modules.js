import { v4 as uuidv4 } from "uuid";

const campaignModules = [
  { id: uuidv4(), title: "Introdution", duration: "10", costPerRecipient: "0" },
];

const threatModules = [
  {
    id: uuidv4(),
    title: "Session Hijacking",
    duration: "10",
    costPerRecipient: "4",
  },
  { id: uuidv4(), title: "IP Spoofing", duration: "12", costPerRecipient: "6" },
  { id: uuidv4(), title: "DDos", duration: "30", costPerRecipient: "15" },
  {
    id: uuidv4(),
    title: "Man In The Middle",
    duration: "11",
    costPerRecipient: "7",
  },
  { id: uuidv4(), title: "Phishing", duration: "3", costPerRecipient: "3" },
  { id: uuidv4(), title: "Ransomware", duration: "6", costPerRecipient: "17" },
  {
    id: uuidv4(),
    title: "Attack On IoT Devices",
    duration: "23 Min",
    costPerRecipient: "25",
  },
  {
    id: uuidv4(),
    title: "Malware On Mobile",
    duration: "13 Min",
    costPerRecipient: "22",
  },
  {
    id: uuidv4(),
    title: "Password Attack",
    duration: "17 Min",
    costPerRecipient: "13",
  },
];

export const columnsData = {
  0: {
    name: "Your Campaign",
    items: campaignModules,
  },
  1: {
    name: "Threat Modules",
    items: threatModules,
  },
};
