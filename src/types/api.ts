type TechIcon = {
  title: string
  image: {
    alternativeText: string
    url: string
  }
}

type ConceptsItem = {
  id: string
  title: string
}

type ModuleItem = {
  id: string
  title: string
  subtitle: string
  description: string
}

type SocialLinkItem = {
  title: string
  url: string
}

type Author = {
  name: string
  role: string
  photo: {
    alternativeText: string
    url: string
  }
  socialLinks: SocialLinkItem
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsItem[]
}

export type SectionModulesProps = {
  title: string
  modules: ModuleItem[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: string
  numberInstallments: string
  priceInstallment: string
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
}
