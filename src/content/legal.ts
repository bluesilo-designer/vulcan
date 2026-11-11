/* Privacy, Terms and Security pages (11 Nov 2026). Draft for legal review.
   Written only from what the site does today: no analytics or advertising
   cookies; Google Fonts and jsDelivr are loaded from third parties; the
   enquiry form collects name, organisation, role, work email and message.
   If any of that changes, change this text in the same commit.
   No retention periods, response times or contact addresses are stated
   because none are confirmed. Each block is [heading, paragraphs[]]. */
export type LegalDoc = {
  path: string; title: string; label: string; lead: string; updated: string;
  blocks: [string, string[]][];
};

export const LEGAL_UPDATED = '11 November 2026';

export const LEGAL: Record<'privacy' | 'terms' | 'security', LegalDoc> = {
  privacy: {
    path: '/privacy', title: 'Privacy', label: 'Privacy', updated: LEGAL_UPDATED,
    lead: 'What we collect when you use this site or contact us, why we collect it, and the choices you have.',
    blocks: [
      ['Who we are', [
        'This site is run by Blue Silo Pte. Ltd., a company registered in Singapore. In this page, "we" means Blue Silo Pte. Ltd.',
      ]],
      ['What we collect', [
        'If you send us an enquiry, we collect what you enter: your name, organisation, role, work email and message. We ask for nothing else.',
        'This site does not use advertising cookies or analytics tools. To show text and icons, your browser requests fonts from Google Fonts and icons from jsDelivr. Those services receive your IP address and browser details when it does.',
      ]],
      ['How we use it', [
        'We use your enquiry only to understand it, reply to you and arrange any follow-up, such as a demonstration. We do not sell your information.',
      ]],
      ['Who sees it', [
        'Your enquiry goes to the people at Blue Silo who need it to reply. We may also use service providers who host this site or handle email for us, under terms that protect your information. We share information with anyone else only when the law requires it.',
      ]],
      ['How long we keep it', [
        'We keep an enquiry for as long as we need it to deal with your request and to meet our legal obligations, and then delete it.',
      ]],
      ['Your choices', [
        'You can ask us to tell you what we hold about you, to correct it, or to delete it. You can also withdraw your consent to us using it. To do any of these, contact us and say which one you want.',
        'Please do not send classified or other sensitive information through this site.',
      ]],
      ['Changes', [
        'If we change how we handle information, we will update this page and its date.',
      ]],
    ],
  },
  terms: {
    path: '/terms', title: 'Terms', label: 'Terms of use', updated: LEGAL_UPDATED,
    lead: 'The terms that apply when you use this website.',
    blocks: [
      ['Using this site', [
        'By using this site you agree to these terms. If you do not agree, please do not use it.',
      ]],
      ['What the site is', [
        'This site describes Blue Silo and the systems we build. It is general information, not an offer, a quotation or a contract. Descriptions of systems, features and availability can change, and any supply of a system is governed by a separate written agreement.',
      ]],
      ['Sensitive information', [
        'Do not send classified information, or other information you are not permitted to share, through this site or its enquiry form.',
      ]],
      ['Ownership', [
        'The content of this site, including text, images, video, diagrams and software, belongs to Blue Silo Pte. Ltd. or its licensors. You may view it and share a link to it. You may not copy, change or reuse it without our written permission.',
        'Other companies\' names, product names and logos shown on this site belong to their owners and appear only to describe how our systems work with theirs.',
      ]],
      ['Links', [
        'This site may link to other websites. We do not control them and are not responsible for their content.',
      ]],
      ['No warranty, and limits on liability', [
        'We try to keep this site accurate and available, but we provide it as it is, without a promise that it is complete, current or always working. To the extent the law allows, Blue Silo is not liable for loss that results from using this site or relying on what it says.',
      ]],
      ['Governing law', [
        'These terms are governed by the laws of Singapore, and the courts of Singapore have jurisdiction over any dispute about them.',
      ]],
      ['Changes', [
        'We may update these terms. The date at the top of this page shows when they last changed.',
      ]],
    ],
  },
  security: {
    path: '/security', title: 'Security', label: 'Security', updated: LEGAL_UPDATED,
    lead: 'How to report a security problem with this website, and where to read how our systems are secured.',
    blocks: [
      ['How our systems are secured', [
        'Our approach to licensing, hardening, authentication, network separation and standards is set out on the Assurance page.',
      ]],
      ['Report a vulnerability', [
        'If you believe you have found a security problem in this website, please tell us. Use the contact page, choose "Other enquiry", and describe what you found and how to reproduce it.',
        'Please give us reasonable time to fix the problem before you share it with anyone else. Please do not access, change or delete data that is not yours, and do not disrupt the site.',
        'Do not include classified information or personal data in your report.',
      ]],
      ['Problems in a delivered system', [
        'This page covers this website only. If you have a concern about a Blue Silo system already in use, please contact us through your programme\'s agreed support route.',
      ]],
    ],
  },
};
