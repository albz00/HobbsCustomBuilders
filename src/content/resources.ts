export type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

export type ResourceCategory = {
  id: string;
  title: string;
  description: string;
  links: ResourceLink[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'permits-planning',
    title: 'Permits & local planning',
    description:
      'Most new construction, additions, decks, and major remodels need a permit before work starts. Greenbrier County handles permitting for much of the area around White Sulphur Springs.',
    links: [
      {
        title: 'Greenbrier County Planning & Permit',
        description:
          'County building department contact, permit requirements, adopted codes, and how to get a project reviewed.',
        href: 'https://greenbriercounty.net/departments/planning-permit/'
      },
      {
        title: 'Cloudpermit online permit portal',
        description:
          'Apply for permits, track status, schedule inspections, and pay fees online for Greenbrier County projects.',
        href: 'https://us.cloudpermit.com/'
      },
      {
        title: 'Greenbrier County Zoning Ordinance',
        description:
          'Land use, setbacks, and zoning rules that can affect where and how you build on your property.',
        href: 'https://greenbriercounty.net/departments/planning-commission/'
      },
      {
        title: 'City of White Sulphur Springs',
        description:
          'Municipal departments, utilities, and local contacts for projects inside city limits.',
        href: 'https://www.whitesulphurspringswv.org/government/'
      }
    ]
  },
  {
    id: 'licenses-contractors',
    title: 'Licenses & hiring a contractor',
    description:
      'West Virginia requires licensed contractors for most residential and commercial work. These tools help you verify credentials before you hire.',
    links: [
      {
        title: 'WV Contractor License Search',
        description:
          'Look up a contractor by license number, company name, classification, or county. Hobbs Custom Builders is WV license #WV061746.',
        href: 'https://wvclboard.wv.gov/verify/'
      },
      {
        title: 'WV Division of Labor consumer information',
        description:
          'What to expect from a licensed contractor, classification types, and how the licensing process works in West Virginia.',
        href: 'https://labor.wv.gov/Licensing/Contractor_License/Pages/contractor-consumer-info.aspx'
      }
    ]
  },
  {
    id: 'building-codes',
    title: 'Building codes & compliance',
    description:
      'West Virginia adopts statewide building codes that local jurisdictions enforce. Helpful when planning scope, inspections, or structural changes.',
    links: [
      {
        title: 'WV State Building Code Program',
        description:
          'State Fire Marshal office overseeing adopted codes, amendments, and compliance guidance for West Virginia.',
        href: 'https://wvbss.wv.gov/building-code/'
      },
      {
        title: 'Greenbrier County building code manual',
        description:
          'County administrative policies for permits, plan review, inspections, and project timelines.',
        href: 'https://greenbriercounty.net/wp-content/uploads/Building-Code-Admin-Policy-Manual.pdf'
      }
    ]
  },
  {
    id: 'financing-programs',
    title: 'Financing & housing programs',
    description:
      'State programs that can help homeowners fund a purchase, renovation, or new build, especially useful early in the planning stage.',
    links: [
      {
        title: 'West Virginia Housing Development Fund',
        description:
          'Low-down-payment loans, homeownership programs, and renovation financing options for qualifying West Virginia residents.',
        href: 'https://wvhdf.com/home-buyers'
      },
      {
        title: 'WV Home Energy Rebates',
        description:
          'State-managed rebates for insulation, heat pumps, appliances, and whole-home efficiency upgrades on eligible projects.',
        href: 'https://energywv.org/'
      }
    ]
  },
  {
    id: 'site-flood',
    title: 'Site planning & flood zones',
    description:
      'Mountain properties often have slope, drainage, and flood considerations. Check these before you finalize a footprint or foundation plan.',
    links: [
      {
        title: 'FEMA Flood Map Service Center',
        description:
          'Official flood zone maps for your address, important for insurance, financing, and building in low-lying or creek-side areas.',
        href: 'https://msc.fema.gov/portal/home'
      },
      {
        title: 'West Virginia Department of Environmental Protection',
        description:
          'Environmental permits, erosion control guidance, and resources for projects that may affect streams, wetlands, or steep slopes.',
        href: 'https://dep.wv.gov/'
      }
    ]
  },
  {
    id: 'utilities-community',
    title: 'Regional utilities & community',
    description:
      'Local services and organizations around the Greenbrier Valley that homeowners often need during or after a build.',
    links: [
      {
        title: 'White Sulphur Springs utilities',
        description:
          'Water, sewer, and municipal utility payment information for properties served by the city.',
        href: 'https://www.whitesulphurspringswv.org/payments/utilities/'
      },
      {
        title: 'Greenbrier County Convention & Visitors Bureau',
        description:
          'Community information, local events, and resources for the Greenbrier Valley region.',
        href: 'https://greenbrierwv.com/'
      },
      {
        title: 'Home Builders Association of West Virginia',
        description:
          'Statewide builder association with education, advocacy, and industry resources for residential construction in WV.',
        href: 'https://hbawv.org/'
      }
    ]
  }
];

export const resourcesDisclaimer =
  'These links are provided as a starting point for homeowners planning a project. Hobbs Custom Builders is not affiliated with these organizations and does not control their content. Permit rules and program eligibility can change, so always confirm requirements with the issuing office.';
