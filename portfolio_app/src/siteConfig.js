// Single source of truth for identity, links and contact details. Hero, Dock,
// CommandPalette and Contact all read from here.
//
// NOTE: `email` is rendered as a visible mailto link and is what the Cmd-K
// palette copies to the clipboard — make sure it's an address you read.

export const SITE = {
  name: 'Sheikh Sahil',
  role: 'Full-Stack Developer',
  location: 'India',

  email: 'sk.sahil.ss574@gmail.com',

  github: 'https://github.com/theinnocentboy',
  githubUser: 'theinnocentboy',
  linkedin: 'https://www.linkedin.com/in/sheikhsahil-in/',

  resumePath: '/Sheikh_Sahil_Resume.pdf',
  resumeFile: 'Sheikh_Sahil_Resume.pdf',
};

export default SITE;