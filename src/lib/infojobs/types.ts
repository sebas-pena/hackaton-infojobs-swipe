interface DictionaryItem {
  id: number
  value: string
}

interface Author {
  id: string
  name: string
  uri: string
  privateId: number
  logoUrl?: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
}

export interface JobOffer {
  id: string
  title: string
  province: DictionaryItem
  city: string
  link: string
  category: DictionaryItem
  contractType: DictionaryItem
  subcategory: DictionaryItem
  salaryMin: Salary
  salaryMax: Salary
  salaryPeriod: Salary
  experienceMin: DictionaryItem
  workDay: DictionaryItem
  study: DictionaryItem
  teleworking?: DictionaryItem
  published: string
  updated: string
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  subSegment: number
  executive: boolean
  salaryDescription: string
  urgent: boolean
  color: boolean
  multiDictionaryItem: boolean
}

interface DataLayer {
  offer_search_page: string
  offer_search_page_limit: string
  region_level2_id: string
}

export interface InfoJobsOfferResponse {
  currentPage: number
  pageSize: number
  totalResults: number
  currentResults: number
  sinceDate?: string
  totalPages: number
  availableSortingMethods: string[]
  sortBy: string
  items: JobOffer[]
  dataLayer: DataLayer
  offers: JobOffer[]
  queryParameters: any
  eligibleForAutomaticAlertCreation: boolean
}

export interface InfoJobsCandidateResposne {
  id: number
  email: string
  emailHash: string
  key: string
  hasPhoto: boolean
  photo: string
  name: string
  surname1: string
  surname2: string
  fullName: string
  city: string
  province: DictionaryItem
  publicProfileLink: string
  status: number
  validatedMail: number
  accountCreation: string
  lastCVUpdate: string
  lastInscripcion: string
  extendedBannerAttributes: string
  subSegment: string
  doesNotWantNotifications: boolean
  photoAccepted: boolean
}

export interface InfoJobsOAuthResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

interface Profile {
  id: string
  name: string
  description: string
  province: DictionaryItem
  web: string
  numberWorkers: number
  logoUrl: string
  url: string
  corporateWebsiteUrl: string
  websiteUrl: string
  hidden: boolean
  typeIndustry: DictionaryItem
  country: DictionaryItem
  corporateResponsive: boolean
  showCorporativeHeader: boolean
  clientId: number
  followable: boolean
}

interface Salary {
  amount: number
  amountId: number
  periodId: number
  periodValue: string
  amountValue: string
}

interface Skill {
  skill: string
}

export interface InfoJobsDetailedOfferResponse {
  title: string
  id: string
  state: number
  creationDate: string
  updateDate: string
  city: string
  externalUrlForm: string
  blocked: boolean
  applications: number
  province: DictionaryItem
  experienceMin: DictionaryItem
  category: DictionaryItem
  subcategory: DictionaryItem
  studiesMin: DictionaryItem
  residence: DictionaryItem
  country: DictionaryItem
  contractType: DictionaryItem
  journey: DictionaryItem
  subSegment: number
  profile: Profile
  cityPD: number
  zipCode: string
  latitude: number
  longitude: number
  exactLocation: boolean
  department: string
  vacancies: number
  minRequirements: string
  description: string
  desiredRequirements: string
  commissions: string
  contractDuration: string
  referenceId: string
  detailedStudiesId: number
  studying: boolean
  showPay: boolean
  multiDictionaryItem: boolean
  maxPay?: Salary
  minPay?: Salary
  schedule: string
  jobLevel: DictionaryItem
  staffInCharge: DictionaryItem
  hasKillerQuestions: number
  hasOpenQuestions: number
  fiscalAddress: string
  skillsList: Skill[]
  salaryDescription: string
}
