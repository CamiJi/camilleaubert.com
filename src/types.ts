// Shared TypeScript interfaces for the portfolio

export interface Social {
  name: string;
  url: string;
  icon: string;
  showInContact?: boolean;
}

export interface ProfileData {
  name: string;
  photoUrl: string;
  intro: string;
  introHtml: string;
  resumeUrl: string;
  webpageTitle: string;
  socials: Social[];
}
