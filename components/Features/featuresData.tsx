import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        {/* SVG Path for Decentralized Healthcare Records */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Decentralized Healthcare Records",
    paragraph:
      "Safe Chain offers a blockchain-based solution for the decentralized management of healthcare records. Leveraging the Internet Computer blockchain, it ensures the privacy, integrity, and accessibility of medical information globally.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* SVG Path for Decentralized Identity */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Decentralized Identity",
    paragraph:
      "Safe Chain provides secure and decentralized authentication through Internet Identity. It establishes trusted digital identities for both patients and healthcare providers, ensuring a reliable and secure platform.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* SVG Path for Immutable Record Keeping */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Immutable Record Keeping",
    paragraph:
      "Utilizing blockchain immutability, Safe Chain maintains transparent and unalterable healthcare records. This approach builds trust in the accuracy and integrity of patient information.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        {/* SVG Path for Smart Contracts for Record Management */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Smart Contracts for Record Management",
    paragraph:
      "Safe Chain implements smart contracts to manage the creation, updating, and access control of patient records. These contracts enforce rules to prevent unauthorized access and ensure compliance with healthcare regulations.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* SVG Path for Passphrase and NFC Card Security */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Passphrase and NFC Card Security",
    paragraph:
      "Safe Chain introduces an additional layer of security with passphrases for healthcare providers. NFC cards with encrypted passphrases are provided for physical access, especially in emergency situations.",
  },
  
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* SVG Path for Emergency Access Protocol */}
        {/* Insert SVG Path here */}
      </svg>
    ),
    title: "Emergency Access Protocol",
    paragraph:
      "Safe Chain implements a secure emergency access protocol for authorized personnel during critical situations. This ensures timely access to vital information, enhancing patient care in emergency scenarios.",
  },
];
export default featuresData;
