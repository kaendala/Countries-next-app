export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
  cca3: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  ara?: Ara;
  cal?: Ara;
  cha?: Ara;
  eng?: Ara;
  cat?: Ara;
  aym?: Ara;
  grn?: Ara;
  que?: Ara;
  spa?: Ara;
  fra?: Ara;
  hye?: Ara;
  mfe?: Ara;
  div?: Ara;
  smo?: Ara;
  mkd?: Ara;
  amh?: Ara;
  kal?: Ara;
  arc?: Ara;
  ckb?: Ara;
  nld?: Ara;
  swe?: Ara;
  est?: Ara;
  bwg?: Ara;
  kck?: Ara;
  khi?: Ara;
  ndc?: Ara;
  nde?: Ara;
  nya?: Ara;
  sna?: Ara;
  sot?: Ara;
  toi?: Ara;
  tsn?: Ara;
  tso?: Ara;
  ven?: Ara;
  xho?: Ara;
  zib?: Ara;
  slk?: Ara;
  prs?: Ara;
  pus?: Ara;
  tuk?: Ara;
  sag?: Ara;
  ita?: Ara;
  lat?: Ara;
  bis?: Ara;
  gil?: Ara;
  zho?: Ara;
  por?: Ara;
  tet?: Ara;
  ssw?: Ara;
  rus?: Ara;
  uzb?: Ara;
  ind?: Ara;
  hrv?: Ara;
  pol?: Ara;
  bos?: Ara;
  heb?: Ara;
  pap?: Ara;
  msa?: Ara;
  mlt?: Ara;
  bel?: Ara;
  tur?: Ara;
  fin?: Ara;
  dzo?: Ara;
  ces?: Ara;
  cnr?: Ara;
  nor?: Ara;
  hin?: Ara;
  tam?: Ara;
  mri?: Ara;
  nzs?: Ara;
  jam?: Ara;
  kon?: Ara;
  lin?: Ara;
  urd?: Ara;
  kaz?: Ara;
  fij?: Ara;
  hif?: Ara;
  isl?: Ara;
  mya?: Ara;
  ben?: Ara;
  fil?: Ara;
  gle?: Ara;
  nep?: Ara;
  kor?: Ara;
  dan?: Ara;
  tir?: Ara;
  fas?: Ara;
  swa?: Ara;
  ell?: Ara;
  nfr?: Ara;
  kin?: Ara;
  tvl?: Ara;
  crs?: Ara;
  khm?: Ara;
  ukr?: Ara;
  nau?: Ara;
  afr?: Ara;
  deu?: Ara;
  her?: Ara;
  hgm?: Ara;
  kwn?: Ara;
  loz?: Ara;
  ndo?: Ara;
  ton?: Ara;
  mah?: Ara;
  bar?: Ara;
  hun?: Ara;
  bjz?: Ara;
  ltz?: Ara;
  fao?: Ara;
  lua?: Ara;
  nbl?: Ara;
  nso?: Ara;
  zul?: Ara;
  sin?: Ara;
  lav?: Ara;
  ron?: Ara;
  mon?: Ara;
  nno?: Ara;
  nob?: Ara;
  smi?: Ara;
  tha?: Ara;
  nrf?: Ara;
  lao?: Ara;
  aze?: Ara;
  ber?: Ara;
  bul?: Ara;
  run?: Ara;
  sqi?: Ara;
  kat?: Ara;
  vie?: Ara;
  mey?: Ara;
  jpn?: Ara;
  lit?: Ara;
  hat?: Ara;
  hmo?: Ara;
  tpi?: Ara;
  kir?: Ara;
  pau?: Ara;
  mlg?: Ara;
  tkl?: Ara;
  slv?: Ara;
  som?: Ara;
  rar?: Ara;
  zdj?: Ara;
  niu?: Ara;
  gsw?: Ara;
  roh?: Ara;
  pih?: Ara;
  glv?: Ara;
  tgk?: Ara;
  pov?: Ara;
}

interface Ara {
  official: string;
  common: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface DetailContrie {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2017': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Srp;
  bre: Srp;
  ces: Srp;
  cym: Srp;
  deu: Srp;
  est: Srp;
  fin: Srp;
  fra: Srp;
  hrv: Srp;
  hun: Srp;
  ita: Srp;
  jpn: Srp;
  kor: Srp;
  nld: Srp;
  per: Srp;
  pol: Srp;
  por: Srp;
  rus: Srp;
  slk: Srp;
  spa: Srp;
  srp: Srp;
  swe: Srp;
  tur: Srp;
  urd: Srp;
  zho: Srp;
}

interface Languages {
  srp: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  RSD: RSD;
}

interface RSD {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  srp: Srp;
}

interface Srp {
  official: string;
  common: string;
}
