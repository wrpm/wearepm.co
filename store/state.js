import capabilitiesJson from '~/data/capabilities.json'
import processStepsJson from '~/data/process-steps.json'

const state = {
  capabilities: capabilitiesJson,
  processSteps: processStepsJson,
  socialProfiles: [
    {
      name: 'Facebook',
      title: 'Follow us on Facebook',
      text: 'Facebook',
      icon: 'facebook.svg',
      url: 'https://www.facebook.com/wearepmco/'
    },
    {
      name: 'Instagram',
      title: 'Follow us on Instagram',
      text: 'Instagram',
      icon: 'instagram.svg',
      url: 'https://www.instagram.com/wearepmco/'
    },
    {
      name: 'LinkedIn',
      title: 'Connect with us on LinkedIn',
      text: 'LinkedIn',
      icon: 'linkedin.svg',
      url: 'https://www.linkedin.com/company/wrpm/'
    }
  ]
}

export default state
