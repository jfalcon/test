export interface Timezone {
  offset: number; // in minutes
  name: string;
  label: string;
}

export interface Timezones {
  [key: string]: Timezones | Timezone;
}

// IANA Compatible
export const timezones: { [key: string]: Timezones | Timezone } = {
  Africa: {
    Abidjan: {
      offset: 0,
      name: 'Africa/Abidjan',
      label: 'Africa/Abidjan (GMT)',
    },
    Accra: {
      offset: 0,
      name: 'Africa/Accra',
      label: 'Africa/Accra (GMT)',
    },
    AddisAbaba: { // cSpell:disable-line
      offset: 180,
      name: 'Africa/Addis_Ababa', // cSpell:disable-line
      label: 'Africa/Addis Ababa (EAT)', // cSpell:disable-line
    },
    Algiers: {
      offset: 60,
      name: 'Africa/Algiers',
      label: 'Africa/Algiers (CET)',
    },
    Asmara: {
      offset: 180,
      name: 'Africa/Asmara',
      label: 'Africa/Asmara (EAT)',
    },
    Bamako: {
      offset: 0,
      name: 'Africa/Bamako',
      label: 'Africa/Bamako (GMT)',
    },
    Bangui: {
      offset: 60,
      name: 'Africa/Bangui',
      label: 'Africa/Bangui (WAT)',
    },
    Banjul: {
      offset: 0,
      name: 'Africa/Banjul',
      label: 'Africa/Banjul (GMT)',
    },
    Bissau: {
      offset: 0,
      name: 'Africa/Bissau',
      label: 'Africa/Bissau (GMT)',
    },
    Blantyre: {
      offset: 120,
      name: 'Africa/Blantyre',
      label: 'Africa/Blantyre (CAT)',
    },
    Brazzaville: {
      offset: 60,
      name: 'Africa/Brazzaville',
      label: 'Africa/Brazzaville (WAT)',
    },
    Bujumbura: {
      offset: 120,
      name: 'Africa/Bujumbura',
      label: 'Africa/Bujumbura (CAT)',
    },
    Cairo: {
      offset: 120,
      name: 'Africa/Cairo',
      label: 'Africa/Cairo (EET)',
    },
    Casablanca: {
      offset: 60,
      name: 'Africa/Casablanca',
      label: 'Africa/Casablanca (WEST)',
    },
    Ceuta: {
      offset: 120,
      name: 'Africa/Ceuta',
      label: 'Africa/Ceuta (CEST)',
    },
    Conakry: {
      offset: 0,
      name: 'Africa/Conakry',
      label: 'Africa/Conakry (GMT)',
    },
    Dakar: {
      offset: 0,
      name: 'Africa/Dakar',
      label: 'Africa/Dakar (GMT)',
    },
    DarEsSalaam: {
      offset: 180,
      name: 'Africa/Dar_es_Salaam',
      label: 'Africa/Dar es Salaam (EAT)',
    },
    Djibouti: {
      offset: 180,
      name: 'Africa/Djibouti',
      label: 'Africa/Djibouti (EAT)',
    },
    Douala: {
      offset: 60,
      name: 'Africa/Douala',
      label: 'Africa/Douala (WAT)',
    },
    ElAaiun: { // cSpell:disable-line
      offset: 60,
      name: 'Africa/El_Aaiun', // cSpell:disable-line
      label: 'Africa/El Aaiun (WEST)', // cSpell:disable-line
    },
    Freetown: {
      offset: 0,
      name: 'Africa/Freetown',
      label: 'Africa/Freetown (GMT)',
    },
    Gaborone: {
      offset: 120,
      name: 'Africa/Gaborone',
      label: 'Africa/Gaborone (CAT)',
    },
    Harare: {
      offset: 120,
      name: 'Africa/Harare',
      label: 'Africa/Harare (CAT)',
    },
    Johannesburg: {
      offset: 120,
      name: 'Africa/Johannesburg',
      label: 'Africa/Johannesburg (SAST)',
    },
    Juba: {
      offset: 180,
      name: 'Africa/Juba',
      label: 'Africa/Juba (EAT)',
    },
    Kampala: {
      offset: 180,
      name: 'Africa/Kampala',
      label: 'Africa/Kampala (EAT)',
    },
    Khartoum: {
      offset: 180,
      name: 'Africa/Khartoum',
      label: 'Africa/Khartoum (EAT)',
    },
    Kigali: {
      offset: 120,
      name: 'Africa/Kigali',
      label: 'Africa/Kigali (CAT)',
    },
    Kinshasa: {
      offset: 60,
      name: 'Africa/Kinshasa',
      label: 'Africa/Kinshasa (WAT)',
    },
    Lagos: {
      offset: 60,
      name: 'Africa/Lagos',
      label: 'Africa/Lagos (WAT)',
    },
    Libreville: {
      offset: 60,
      name: 'Africa/Libreville',
      label: 'Africa/Libreville (WAT)',
    },
    Lome: {
      offset: 0,
      name: 'Africa/Lome',
      label: 'Africa/Lome (GMT)',
    },
    Luanda: {
      offset: 60,
      name: 'Africa/Luanda',
      label: 'Africa/Luanda (WAT)',
    },
    Lubumbashi: {
      offset: 120,
      name: 'Africa/Lubumbashi',
      label: 'Africa/Lubumbashi (CAT)',
    },
    Lusaka: {
      offset: 120,
      name: 'Africa/Lusaka',
      label: 'Africa/Lusaka (CAT)',
    },
    Malabo: {
      offset: 60,
      name: 'Africa/Malabo',
      label: 'Africa/Malabo (WAT)',
    },
    Maputo: {
      offset: 120,
      name: 'Africa/Maputo',
      label: 'Africa/Maputo (CAT)',
    },
    Maseru: {
      offset: 120,
      name: 'Africa/Maseru',
      label: 'Africa/Maseru (SAST)',
    },
    Mbabane: {
      offset: 120,
      name: 'Africa/Mbabane',
      label: 'Africa/Mbabane (SAST)',
    },
    Mogadishu: {
      offset: 180,
      name: 'Africa/Mogadishu',
      label: 'Africa/Mogadishu (EAT)',
    },
    Monrovia: {
      offset: 0,
      name: 'Africa/Monrovia',
      label: 'Africa/Monrovia (GMT)',
    },
    Nairobi: {
      offset: 180,
      name: 'Africa/Nairobi',
      label: 'Africa/Nairobi (EAT)',
    },
    Ndjamena: {
      offset: 60,
      name: 'Africa/Ndjamena',
      label: 'Africa/Ndjamena (WAT)',
    },
    Niamey: {
      offset: 60,
      name: 'Africa/Niamey',
      label: 'Africa/Niamey (WAT)',
    },
    Nouakchott: {
      offset: 0,
      name: 'Africa/Nouakchott',
      label: 'Africa/Nouakchott (GMT)',
    },
    Ouagadougou: {
      offset: 0,
      name: 'Africa/Ouagadougou',
      label: 'Africa/Ouagadougou (GMT)',
    },
    PortoNovo: {
      offset: 60,
      name: 'Africa/Porto-Novo',
      label: 'Africa/Porto-Novo (WAT)',
    },
    SaoTome: {
      offset: 0,
      name: 'Africa/Sao_Tome',
      label: 'Africa/Sao_Tome (GMT)',
    },
    Tripoli: {
      offset: 120,
      name: 'Africa/Tripoli',
      label: 'Africa/Tripoli (EET)',
    },
    Tunis: {
      offset: 60,
      name: 'Africa/Tunis',
      label: 'Africa/Tunis (CET)',
    },
    Windhoek: {
      offset: 60,
      name: 'Africa/Windhoek',
      label: 'Africa/Windhoek (WAT)',
    },
  },
  America: {
    Adak: { // cSpell:disable-line
      offset: -540,
      name: 'America/Adak', // cSpell:disable-line
      label: 'America/Adak (HDT)', // cSpell:disable-line
    },
    Anchorage: {
      offset: -480,
      name: 'America/Anchorage',
      label: 'America/Anchorage (AKDT)',
    },
    Anguilla: {
      offset: -240,
      name: 'America/Anguilla',
      label: 'America/Anguilla (AST)',
    },
    Antigua: {
      offset: -240,
      name: 'America/Antigua',
      label: 'America/Antigua (AST)',
    },
    Araguaina: { // cSpell:disable-line
      offset: -180,
      name: 'America/Araguaina', // cSpell:disable-line
      label: 'America/Araguaina (-03)', // cSpell:disable-line
    },
    Argentina: {
      BuenosAires: {
        offset: -180,
        name: 'America/Argentina/Buenos_Aires',
        label: 'America/Argentina/Buenos Aires (-03)',
      },
      Catamarca: {
        offset: -180,
        name: 'America/Argentina/Catamarca',
        label: 'America/Argentina/Catamarca (-03)',
      },
      Cordoba: {
        offset: -180,
        name: 'America/Argentina/Cordoba',
        label: 'America/Argentina/Cordoba (-03)',
      },
      Jujuy: { // cSpell:disable-line
        offset: -180,
        name: 'America/Argentina/Jujuy', // cSpell:disable-line
        label: 'America/Argentina/Jujuy (-03)', // cSpell:disable-line
      },
      LaRioja: { // cSpell:disable-line
        offset: -180,
        name: 'America/Argentina/La_Rioja', // cSpell:disable-line
        label: 'America/Argentina/La Rioja (-03)', // cSpell:disable-line
      },
      Mendoza: {
        offset: -180,
        name: 'America/Argentina/Mendoza',
        label: 'America/Argentina/Mendoza (-03)',
      },
      RioGallegos: {
        offset: -180,
        name: 'America/Argentina/Rio_Gallegos',
        label: 'America/Argentina/Rio Gallegos (-03)',
      },
      Salta: {
        offset: -180,
        name: 'America/Argentina/Salta',
        label: 'America/Argentina/Salta (-03)',
      },
      SanJuan: {
        offset: -180,
        name: 'America/Argentina/San_Juan',
        label: 'America/Argentina/San Juan (-03)',
      },
      SanLuis: {
        offset: -180,
        name: 'America/Argentina/San_Luis',
        label: 'America/Argentina/San Luis (-03)',
      },
      Tucuman: {
        offset: -180,
        name: 'America/Argentina/Tucuman',
        label: 'America/Argentina/Tucuman (-03)',
      },
      Ushuaia: { // cSpell:disable-line
        offset: -180,
        name: 'America/Argentina/Ushuaia', // cSpell:disable-line
        label: 'America/Argentina/Ushuaia (-03)', // cSpell:disable-line
      },
    },
    Aruba: {
      offset: -240,
      name: 'America/Aruba',
      label: 'America/Aruba (AST)',
    },
    Asuncion: {
      offset: -240,
      name: 'America/Asuncion',
      label: 'America/Asuncion (-04)',
    },
    Atikokan: { // cSpell:disable-line
      offset: -300,
      name: 'America/Atikokan', // cSpell:disable-line
      label: 'America/Atikokan (EST)', // cSpell:disable-line
    },
    Bahia: {
      offset: -180,
      name: 'America/Bahia',
      label: 'America/Bahia (-03)',
    },
    BahiaBanderas: {
      offset: -300,
      name: 'America/Bahia_Banderas',
      label: 'America/Bahia Banderas (CDT)',
    },
    Barbados: {
      offset: -240,
      name: 'America/Barbados',
      label: 'America/Barbados (AST)',
    },
    Belem: {
      offset: -180,
      name: 'America/Belem',
      label: 'America/Belem (-03)',
    },
    Belize: {
      offset: -360,
      name: 'America/Belize',
      label: 'America/Belize (CST)',
    },
    BlancSablon: {
      offset: -240,
      name: 'America/Blanc-Sablon',
      label: 'America/Blanc-Sablon (AST)',
    },
    BoaVista: {
      offset: -240,
      name: 'America/Boa_Vista',
      label: 'America/Boa Vista (-04)',
    },
    Bogota: {
      offset: -300,
      name: 'America/Bogota',
      label: 'America/Bogota (-05)',
    },
    Boise: {
      offset: -360,
      name: 'America/Boise',
      label: 'America/Boise (MDT)',
    },
    Cambridge_Bay: {
      offset: -360,
      name: 'America/Cambridge_Bay',
      label: 'America/Cambridge Bay (MDT)',
    },
    CampoGrande: {
      offset: -240,
      name: 'America/Campo_Grande',
      label: 'America/Campo Grande (-04)',
    },
    Cancun: {
      offset: -300,
      name: 'America/Cancun',
      label: 'America/Cancun (EST)',
    },
    Caracas: {
      offset: -240,
      name: 'America/Caracas',
      label: 'America/Caracas (-04)',
    },
    Cayenne: {
      offset: -180,
      name: 'America/Cayenne',
      label: 'America/Cayenne (-03)',
    },
    Cayman: {
      offset: -300,
      name: 'America/Cayman',
      label: 'America/Cayman (EST)',
    },
    Chicago: {
      offset: -300,
      name: 'America/Chicago',
      label: 'America/Chicago (CDT)',
    },
    Chihuahua: {
      offset: -360,
      name: 'America/Chihuahua',
      label: 'America/Chihuahua (MDT)',
    },
    CostaRica: {
      offset: -360,
      name: 'America/Costa_Rica', // cSpell:disable-line
      label: 'America/Costa Rica (CST)', // cSpell:disable-line
    },
    Creston: { // cSpell:disable-line
      offset: -420,
      name: 'America/Creston', // cSpell:disable-line
      label: 'America/Creston (MST)', // cSpell:disable-line
    },
    Cuiaba: { // cSpell:disable-line
      offset: -240,
      name: 'America/Cuiaba', // cSpell:disable-line
      label: 'America/Cuiaba (-04)', // cSpell:disable-line
    },
    Curacao: {
      offset: -240,
      name: 'America/Curacao',
      label: 'America/Curacao (AST)',
    },
    Danmarkshavn: { // cSpell:disable-line
      offset: 0,
      name: 'America/Danmarkshavn', // cSpell:disable-line
      label: 'America/Danmarkshavn (GMT)', // cSpell:disable-line
    },
    Dawson: {
      offset: -420,
      name: 'America/Dawson',
      label: 'America/Dawson (PDT)',
    },
    Dawson_Creek: {
      offset: -420,
      name: 'America/Dawson_Creek',
      label: 'America/Dawson Creek (MST)',
    },
    Denver: {
      offset: -360,
      name: 'America/Denver',
      label: 'America/Denver (MDT)',
    },
    Detroit: {
      offset: -240,
      name: 'America/Detroit',
      label: 'America/Detroit (EDT)',
    },
    Dominica: {
      offset: -240,
      name: 'America/Dominica',
      label: 'America/Dominica (AST)',
    },
    Edmonton: {
      offset: -360,
      name: 'America/Edmonton',
      label: 'America/Edmonton (MDT)',
    },
    Eirunepe: { // cSpell:disable-line
      offset: -300,
      name: 'America/Eirunepe', // cSpell:disable-line
      label: 'America/Eirunepe (-05)', // cSpell:disable-line
    },
    ElSalvador: {
      offset: -360,
      name: 'America/El_Salvador',
      label: 'America/El Salvador (CST)',
    },
    FortNelson: {
      offset: -420,
      name: 'America/Fort_Nelson',
      label: 'America/Fort Nelson (MST)',
    },
    Fortaleza: {
      offset: -180,
      name: 'America/Fortaleza',
      label: 'America/Fortaleza (-03)',
    },
    GlaceBay: {
      offset: -180,
      name: 'America/Glace_Bay',
      label: 'America/Glace_Bay (ADT)',
    },
    Godthab: {
      offset: -120,
      name: 'America/Godthab',
      label: 'America/Godthab (-02)',
    },
    GooseBay: {
      offset: -180,
      name: 'America/Goose_Bay',
      label: 'America/Goose_Bay (ADT)',
    },
    GrandTurk: {
      offset: -240,
      name: 'America/Grand_Turk',
      label: 'America/Grand Turk (AST)',
    },
    Grenada: {
      offset: -240,
      name: 'America/Grenada',
      label: 'America/Grenada (AST)',
    },
    Guadeloupe: {
      offset: -240,
      name: 'America/Guadeloupe',
      label: 'America/Guadeloupe (AST)',
    },
    Guatemala: {
      offset: -360,
      name: 'America/Guatemala',
      label: 'America/Guatemala (CST)',
    },
    Guayaquil: {
      offset: -300,
      name: 'America/Guayaquil',
      label: 'America/Guayaquil (-05)',
    },
    Guyana: {
      offset: -240,
      name: 'America/Guyana',
      label: 'America/Guyana (-04)',
    },
    Halifax: {
      offset: -180,
      name: 'America/Halifax',
      label: 'America/Halifax (ADT)',
    },
    Havana: {
      offset: -240,
      name: 'America/Havana',
      label: 'America/Havana (CDT)',
    },
    Hermosillo: {
      offset: -420,
      name: 'America/Hermosillo',
      label: 'America/Hermosillo (MST)',
    },
    Indiana: {
      Indianapolis: {
        offset: -240,
        name: 'America/Indiana/Indianapolis',
        label: 'America/Indiana/Indianapolis (EDT)',
      },
      Knox: {
        offset: -300,
        name: 'America/Indiana/Knox',
        label: 'America/Indiana/Knox (CDT)',
      },
      Marengo: {
        offset: -240,
        name: 'America/Indiana/Marengo',
        label: 'America/Indiana/Marengo (EDT)',
      },
      Petersburg: {
        offset: -240,
        name: 'America/Indiana/Petersburg',
        label: 'America/Indiana/Petersburg (EDT)',
      },
      TellCity: {
        offset: -300,
        name: 'America/Indiana/Tell_City',
        label: 'America/Indiana/Tell City (CDT)',
      },
      Vevay: { // cSpell:disable-line
        offset: -240,
        name: 'America/Indiana/Vevay', // cSpell:disable-line
        label: 'America/Indiana/Vevay (EDT)', // cSpell:disable-line
      },
      Vincennes: {
        offset: -240,
        name: 'America/Indiana/Vincennes',
        label: 'America/Indiana/Vincennes (EDT)',
      },
      Winamac: { // cSpell:disable-line
        offset: -240,
        name: 'America/Indiana/Winamac', // cSpell:disable-line
        label: 'America/Indiana/Winamac (EDT)', // cSpell:disable-line
      },
    },
    Inuvik: { // cSpell:disable-line
      offset: -360,
      name: 'America/Inuvik', // cSpell:disable-line
      label: 'America/Inuvik (MDT)', // cSpell:disable-line
    },
    Iqaluit: {
      offset: -240,
      name: 'America/Iqaluit',
      label: 'America/Iqaluit (EDT)',
    },
    Jamaica: {
      offset: -300,
      name: 'America/Jamaica',
      label: 'America/Jamaica (EST)',
    },
    Juneau: {
      offset: -480,
      name: 'America/Juneau',
      label: 'America/Juneau (AKDT)',
    },
    Kentucky: {
      Louisville: {
        offset: -240,
        name: 'America/Kentucky/Louisville',
        label: 'America/Kentucky/Louisville (EDT)',
      },
      Monticello: {
        offset: -240,
        name: 'America/Kentucky/Monticello',
        label: 'America/Kentucky/Monticello (EDT)',
      },
    },
    Kralendijk: { // cSpell:disable-line
      offset: -240,
      name: 'America/Kralendijk', // cSpell:disable-line
      label: 'America/Kralendijk (AST)', // cSpell:disable-line
    },
    LaPaz: {
      offset: -240,
      name: 'America/La_Paz',
      label: 'America/La_Paz (-04)',
    },
    Lima: {
      offset: -300,
      name: 'America/Lima',
      label: 'America/Lima (-05)',
    },
    LosAngeles: {
      offset: -420,
      name: 'America/Los_Angeles',
      label: 'America/Los Angeles (PDT)',
    },
    LowerPrinces: {
      offset: -240,
      name: 'America/Lower_Princes',
      label: 'America/Lower Princes (AST)',
    },
    Maceio: {
      offset: -180,
      name: 'America/Maceio',
      label: 'America/Maceio (-03)',
    },
    Managua: {
      offset: -360,
      name: 'America/Managua',
      label: 'America/Managua (CST)',
    },
    Manaus: {
      offset: -240,
      name: 'America/Manaus',
      label: 'America/Manaus (-04)',
    },
    Marigot: {
      offset: -240,
      name: 'America/Marigot',
      label: 'America/Marigot (AST)',
    },
    Martinique: {
      offset: -240,
      name: 'America/Martinique',
      label: 'America/Martinique (AST)',
    },
    Matamoros: {
      offset: -300,
      name: 'America/Matamoros',
      label: 'America/Matamoros (CDT)',
    },
    Mazatlan: {
      offset: -360,
      name: 'America/Mazatlan',
      label: 'America/Mazatlan (MDT)',
    },
    Menominee: {
      offset: -300,
      name: 'America/Menominee',
      label: 'America/Menominee (CDT)',
    },
    Merida: {
      offset: -300,
      name: 'America/Merida',
      label: 'America/Merida (CDT)',
    },
    Metlakatla: { // cSpell:disable-line
      offset: -480,
      name: 'America/Metlakatla', // cSpell:disable-line
      label: 'America/Metlakatla (AKDT)', // cSpell:disable-line
    },
    MexicoCity: {
      offset: -300,
      name: 'America/Mexico_City',
      label: 'America/Mexico City (CDT)',
    },
    Miquelon: {
      offset: -120,
      name: 'America/Miquelon',
      label: 'America/Miquelon (-02)',
    },
    Moncton: {
      offset: -180,
      name: 'America/Moncton',
      label: 'America/Moncton (ADT)',
    },
    Monterrey: {
      offset: -300,
      name: 'America/Monterrey',
      label: 'America/Monterrey (CDT)',
    },
    Montevideo: {
      offset: -180,
      name: 'America/Montevideo',
      label: 'America/Montevideo (-03)',
    },
    Montserrat: {
      offset: -240,
      name: 'America/Montserrat',
      label: 'America/Montserrat (AST)',
    },
    Nassau: {
      offset: -240,
      name: 'America/Nassau',
      label: 'America/Nassau (EDT)',
    },
    NewYork: {
      offset: -240,
      name: 'America/New_York',
      label: 'America/New_York (EDT)',
    },
    Nipigon: { // cSpell:disable-line
      offset: -240,
      name: 'America/Nipigon', // cSpell:disable-line
      label: 'America/Nipigon (EDT)', // cSpell:disable-line
    },
    Nome: {
      offset: -480,
      name: 'America/Nome',
      label: 'America/Nome (AKDT)',
    },
    Noronha: { // cSpell:disable-line
      offset: -120,
      name: 'America/Noronha', // cSpell:disable-line
      label: 'America/Noronha (-02)', // cSpell:disable-line
    },
    NorthDakota: {
      Beulah: {
        offset: -300,
        name: 'America/North_Dakota/Beulah',
        label: 'America/North Dakota/Beulah (CDT)',
      },
      Center: {
        offset: -300,
        name: 'America/North_Dakota/Center',
        label: 'America/North Dakota/Center (CDT)',
      },
      NewSalem: {
        offset: -300,
        name: 'America/North_Dakota/New_Salem',
        label: 'America/North Dakota/New Salem (CDT)',
      },
    },
    Ojinaga: { // cSpell:disable-line
      offset: -360,
      name: 'America/Ojinaga', // cSpell:disable-line
      label: 'America/Ojinaga (MDT)', // cSpell:disable-line
    },
    Panama: {
      offset: -300,
      name: 'America/Panama',
      label: 'America/Panama (EST)',
    },
    Pangnirtung: { // cSpell:disable-line
      offset: -240,
      name: 'America/Pangnirtung', // cSpell:disable-line
      label: 'America/Pangnirtung (EDT)', // cSpell:disable-line
    },
    Paramaribo: {
      offset: -180,
      name: 'America/Paramaribo',
      label: 'America/Paramaribo (-03)',
    },
    Phoenix: {
      offset: -420,
      name: 'America/Phoenix',
      label: 'America/Phoenix (MST)',
    },
    PortAuPrince: {
      offset: -240,
      name: 'America/Port-au-Prince',
      label: 'America/Port-au-Prince (EDT)',
    },
    PortOfSpain: {
      offset: -240,
      name: 'America/Port_of_Spain',
      label: 'America/Port of Spain (AST)',
    },
    PortoVelho: { // cSpell:disable-line
      offset: -240,
      name: 'America/Porto_Velho', // cSpell:disable-line
      label: 'America/Porto Velho (-04)', // cSpell:disable-line
    },
    PuertoRico: {
      offset: -240,
      name: 'America/Puerto_Rico',
      label: 'America/Puerto Rico (AST)',
    },
    PuntaArenas: { // cSpell:disable-line
      offset: -180,
      name: 'America/Punta_Arenas', // cSpell:disable-line
      label: 'America/Punta Arenas (-03)', // cSpell:disable-line
    },
    RainyRiver: {
      offset: -300,
      name: 'America/Rainy_River',
      label: 'America/Rainy River (CDT)',
    },
    RankinInlet: {
      offset: -300,
      name: 'America/Rankin_Inlet',
      label: 'America/Rankin Inlet (CDT)',
    },
    Recife: {
      offset: -180,
      name: 'America/Recife',
      label: 'America/Recife (-03)',
    },
    Regina: {
      offset: -360,
      name: 'America/Regina',
      label: 'America/Regina (CST)',
    },
    Resolute: {
      offset: -300,
      name: 'America/Resolute',
      label: 'America/Resolute (CDT)',
    },
    Rio_Branco: {
      offset: -300,
      name: 'America/Rio_Branco',
      label: 'America/Rio Branco (-05)',
    },
    Santarem: {
      offset: -180,
      name: 'America/Santarem',
      label: 'America/Santarem (-03)',
    },
    Santiago: {
      offset: -240,
      name: 'America/Santiago',
      label: 'America/Santiago (-04)',
    },
    SantoDomingo: { // cSpell:disable-line
      offset: -240,
      name: 'America/Santo_Domingo', // cSpell:disable-line
      label: 'America/Santo Domingo (AST)', // cSpell:disable-line
    },
    SaoPaulo: {
      offset: -180,
      name: 'America/Sao_Paulo',
      label: 'America/Sao Paulo (-03)',
    },
    Scoresbysund: { // cSpell:disable-line
      offset: 0,
      name: 'America/Scoresbysund', // cSpell:disable-line
      label: 'America/Scoresbysund (+00)', // cSpell:disable-line
    },
    Sitka: {
      offset: -480,
      name: 'America/Sitka',
      label: 'America/Sitka (AKDT)',
    },
    StBarthelemy: { // cSpell:disable-line
      offset: -240,
      name: 'America/St_Barthelemy', // cSpell:disable-line
      label: 'America/St Barthelemy (AST)', // cSpell:disable-line
    },
    StJohns: {
      offset: -150,
      name: 'America/St_Johns',
      label: 'America/St Johns (NDT)',
    },
    StKitts: { // cSpell:disable-line
      offset: -240,
      name: 'America/St_Kitts', // cSpell:disable-line
      label: 'America/St Kitts (AST)', // cSpell:disable-line
    },
    StLucia: {
      offset: -240,
      name: 'America/St_Lucia',
      label: 'America/St Lucia (AST)',
    },
    StThomas: {
      offset: -240,
      name: 'America/St_Thomas',
      label: 'America/St Thomas (AST)',
    },
    StVincent: {
      offset: -240,
      name: 'America/St_Vincent',
      label: 'America/St Vincent (AST)',
    },
    SwiftCurrent: {
      offset: -360,
      name: 'America/Swift_Current',
      label: 'America/Swift Current (CST)',
    },
    Tegucigalpa: {
      offset: -360,
      name: 'America/Tegucigalpa',
      label: 'America/Tegucigalpa (CST)',
    },
    Thule: {
      offset: -180,
      name: 'America/Thule',
      label: 'America/Thule (ADT)',
    },
    Thunder_Bay: {
      offset: -240,
      name: 'America/Thunder_Bay',
      label: 'America/Thunder Bay (EDT)',
    },
    Tijuana: {
      offset: -420,
      name: 'America/Tijuana',
      label: 'America/Tijuana (PDT)',
    },
    Toronto: {
      offset: -240,
      name: 'America/Toronto',
      label: 'America/Toronto (EDT)',
    },
    Tortola: {
      offset: -240,
      name: 'America/Tortola',
      label: 'America/Tortola (AST)',
    },
    Vancouver: {
      offset: -420,
      name: 'America/Vancouver',
      label: 'America/Vancouver (PDT)',
    },
    Whitehorse: {
      offset: -420,
      name: 'America/Whitehorse',
      label: 'America/Whitehorse (PDT)',
    },
    Winnipeg: {
      offset: -300,
      name: 'America/Winnipeg',
      label: 'America/Winnipeg (CDT)',
    },
    Yakutat: { // cSpell:disable-line
      offset: -480,
      name: 'America/Yakutat', // cSpell:disable-line
      label: 'America/Yakutat (AKDT)', // cSpell:disable-line
    },
    Yellowknife: {
      offset: -360,
      name: 'America/Yellowknife',
      label: 'America/Yellowknife (MDT)',
    },
  },
  Antarctica: {
    Casey: {
      offset: 660,
      name: 'Antarctica/Casey',
      label: 'Antarctica/Casey (+11)',
    },
    Davis: {
      offset: 420,
      name: 'Antarctica/Davis',
      label: 'Antarctica/Davis (+07)',
    },
    DumontDUrville: { // cSpell:disable-line
      offset: 600,
      name: 'Antarctica/DumontDUrville', // cSpell:disable-line
      label: 'Antarctica/DumontDUrville (+10)', // cSpell:disable-line
    },
    Macquarie: {
      offset: 660,
      name: 'Antarctica/Macquarie',
      label: 'Antarctica/Macquarie (+11)',
    },
    Mawson: {
      offset: 300,
      name: 'Antarctica/Mawson',
      label: 'Antarctica/Mawson (+05)',
    },
    McMurdo: { // cSpell:disable-line
      offset: 720,
      name: 'Antarctica/McMurdo', // cSpell:disable-line
      label: 'Antarctica/McMurdo (NZST)', // cSpell:disable-line
    },
    Palmer: {
      offset: -180,
      name: 'Antarctica/Palmer',
      label: 'Antarctica/Palmer (-03)',
    },
    Rothera: {
      offset: -180,
      name: 'Antarctica/Rothera',
      label: 'Antarctica/Rothera (-03)',
    },
    Syowa: { // cSpell:disable-line
      offset: 180,
      name: 'Antarctica/Syowa', // cSpell:disable-line
      label: 'Antarctica/Syowa (+03)', // cSpell:disable-line
    },
    Troll: {
      offset: 120,
      name: 'Antarctica/Troll',
      label: 'Antarctica/Troll (+02)',
    },
    Vostok: {
      offset: 360,
      name: 'Antarctica/Vostok',
      label: 'Antarctica/Vostok (+06)',
    },
  },
  Arctic: {
    Longyearbyen: { // cSpell:disable-line
      offset: 120,
      name: 'Arctic/Longyearbyen', // cSpell:disable-line
      label: 'Arctic/Longyearbyen (CEST)', // cSpell:disable-line
    },
  },
  Asia: {
    Aden: {
      offset: 180,
      name: 'Asia/Aden',
      label: 'Asia/Aden (+03)',
    },
    Almaty: {
      offset: 360,
      name: 'Asia/Almaty',
      label: 'Asia/Almaty (+06)',
    },
    Amman: {
      offset: 180,
      name: 'Asia/Amman',
      label: 'Asia/Amman (EEST)',
    },
    Anadyr: { // cSpell:disable-line
      offset: 720,
      name: 'Asia/Anadyr', // cSpell:disable-line
      label: 'Asia/Anadyr (+12)', // cSpell:disable-line
    },
    Aqtau: { // cSpell:disable-line
      offset: 300,
      name: 'Asia/Aqtau', // cSpell:disable-line
      label: 'Asia/Aqtau (+05)', // cSpell:disable-line
    },
    Aqtobe: { // cSpell:disable-line
      offset: 300,
      name: 'Asia/Aqtobe', // cSpell:disable-line
      label: 'Asia/Aqtobe (+05)', // cSpell:disable-line
    },
    Ashgabat: {
      offset: 300,
      name: 'Asia/Ashgabat',
      label: 'Asia/Ashgabat (+05)',
    },
    Atyrau: { // cSpell:disable-line
      offset: 300,
      name: 'Asia/Atyrau', // cSpell:disable-line
      label: 'Asia/Atyrau (+05)', // cSpell:disable-line
    },
    Baghdad: {
      offset: 180,
      name: 'Asia/Baghdad',
      label: 'Asia/Baghdad (+03)',
    },
    Bahrain: {
      offset: 180,
      name: 'Asia/Bahrain',
      label: 'Asia/Bahrain (+03)',
    },
    Baku: {
      offset: 240,
      name: 'Asia/Baku',
      label: 'Asia/Baku (+04)',
    },
    Bangkok: {
      offset: 420,
      name: 'Asia/Bangkok',
      label: 'Asia/Bangkok (+07)',
    },
    Barnaul: {
      offset: 420,
      name: 'Asia/Barnaul',
      label: 'Asia/Barnaul (+07)',
    },
    Beirut: {
      offset: 180,
      name: 'Asia/Beirut',
      label: 'Asia/Beirut (EEST)',
    },
    Bishkek: {
      offset: 360,
      name: 'Asia/Bishkek',
      label: 'Asia/Bishkek (+06)',
    },
    Brunei: {
      offset: 480,
      name: 'Asia/Brunei',
      label: 'Asia/Brunei (+08)',
    },
    Chita: {
      offset: 540,
      name: 'Asia/Chita',
      label: 'Asia/Chita (+09)',
    },
    Choibalsan: { // cSpell:disable-line
      offset: 480,
      name: 'Asia/Choibalsan', // cSpell:disable-line
      label: 'Asia/Choibalsan (+08)', // cSpell:disable-line
    },
    Colombo: {
      offset: 330,
      name: 'Asia/Colombo',
      label: 'Asia/Colombo (+05:30)',
    },
    Damascus: {
      offset: 180,
      name: 'Asia/Damascus',
      label: 'Asia/Damascus (EEST)',
    },
    Dhaka: {
      offset: 360,
      name: 'Asia/Dhaka',
      label: 'Asia/Dhaka (+06)',
    },
    Dili: { // cSpell:disable-line
      offset: 540,
      name: 'Asia/Dili', // cSpell:disable-line
      label: 'Asia/Dili (+09)', // cSpell:disable-line
    },
    Dubai: {
      offset: 240,
      name: 'Asia/Dubai',
      label: 'Asia/Dubai (+04)',
    },
    Dushanbe: {
      offset: 300,
      name: 'Asia/Dushanbe',
      label: 'Asia/Dushanbe (+05)',
    },
    Famagusta: {
      offset: 180,
      name: 'Asia/Famagusta',
      label: 'Asia/Famagusta (+03)',
    },
    Gaza: {
      offset: 180,
      name: 'Asia/Gaza',
      label: 'Asia/Gaza (EEST)',
    },
    Hebron: {
      offset: 180,
      name: 'Asia/Hebron',
      label: 'Asia/Hebron (EEST)',
    },
    HoChiMinh: { // cSpell:disable-line
      offset: 420,
      name: 'Asia/Ho_Chi_Minh', // cSpell:disable-line
      label: 'Asia/Ho Chi Minh (+07)', // cSpell:disable-line
    },
    HongKong: {
      offset: 480,
      name: 'Asia/Hong_Kong',
      label: 'Asia/Hong Kong (HKT)',
    },
    Hovd: { // cSpell:disable-line
      offset: 420,
      name: 'Asia/Hovd', // cSpell:disable-line
      label: 'Asia/Hovd (+07)', // cSpell:disable-line
    },
    Irkutsk: {
      offset: 480,
      name: 'Asia/Irkutsk',
      label: 'Asia/Irkutsk (+08)',
    },
    Jakarta: {
      offset: 420,
      name: 'Asia/Jakarta',
      label: 'Asia/Jakarta (WIB)',
    },
    Jayapura: {
      offset: 540,
      name: 'Asia/Jayapura',
      label: 'Asia/Jayapura (WIT)',
    },
    Jerusalem: {
      offset: 180,
      name: 'Asia/Jerusalem',
      label: 'Asia/Jerusalem (IDT)',
    },
    Kabul: {
      offset: 270,
      name: 'Asia/Kabul',
      label: 'Asia/Kabul (+04:30)',
    },
    Kamchatka: {
      offset: 720,
      name: 'Asia/Kamchatka',
      label: 'Asia/Kamchatka (+12)',
    },
    Karachi: {
      offset: 300,
      name: 'Asia/Karachi',
      label: 'Asia/Karachi (PKT)',
    },
    Kathmandu: {
      offset: 345,
      name: 'Asia/Kathmandu',
      label: 'Asia/Kathmandu (+05:45)',
    },
    Khandyga: { // cSpell:disable-line
      offset: 540,
      name: 'Asia/Khandyga', // cSpell:disable-line
      label: 'Asia/Khandyga (+09)', // cSpell:disable-line
    },
    Kolkata: { // cSpell:disable-line
      offset: 330,
      name: 'Asia/Kolkata', // cSpell:disable-line
      label: 'Asia/Kolkata (IST)', // cSpell:disable-line
    },
    Krasnoyarsk: {
      offset: 420,
      name: 'Asia/Krasnoyarsk',
      label: 'Asia/Krasnoyarsk (+07)',
    },
    KualaLumpur: { // cSpell:disable-line
      offset: 480,
      name: 'Asia/Kuala_Lumpur', // cSpell:disable-line
      label: 'Asia/Kuala Lumpur (+08)', // cSpell:disable-line
    },
    Kuching: {
      offset: 480,
      name: 'Asia/Kuching',
      label: 'Asia/Kuching (+08)',
    },
    Kuwait: {
      offset: 180,
      name: 'Asia/Kuwait',
      label: 'Asia/Kuwait (+03)',
    },
    Macau: {
      offset: 480,
      name: 'Asia/Macau',
      label: 'Asia/Macau (CST)',
    },
    Magadan: {
      offset: 660,
      name: 'Asia/Magadan',
      label: 'Asia/Magadan (+11)',
    },
    Makassar: {
      offset: 480,
      name: 'Asia/Makassar',
      label: 'Asia/Makassar (WITA)', // cSpell:disable-line
    },
    Manila: {
      offset: 480,
      name: 'Asia/Manila',
      label: 'Asia/Manila (+08)',
    },
    Muscat: {
      offset: 240,
      name: 'Asia/Muscat',
      label: 'Asia/Muscat (+04)',
    },
    Nicosia: {
      offset: 180,
      name: 'Asia/Nicosia',
      label: 'Asia/Nicosia (EEST)',
    },
    Novokuznetsk: {
      offset: 420,
      name: 'Asia/Novokuznetsk',
      label: 'Asia/Novokuznetsk (+07)', // cSpell:disable-line
    },
    Novosibirsk: {
      offset: 420,
      name: 'Asia/Novosibirsk',
      label: 'Asia/Novosibirsk (+07)',
    },
    Omsk: {
      offset: 360,
      name: 'Asia/Omsk',
      label: 'Asia/Omsk (+06)',
    },
    Oral: {
      offset: 300,
      name: 'Asia/Oral',
      label: 'Asia/Oral (+05)',
    },
    PhnomPenh: {
      offset: 420,
      name: 'Asia/Phnom_Penh',
      label: 'Asia/Phnom_Penh (+07)',
    },
    Pontianak: {
      offset: 420,
      name: 'Asia/Pontianak',
      label: 'Asia/Pontianak (WIB)',
    },
    Pyongyang: {
      offset: 510,
      name: 'Asia/Pyongyang',
      label: 'Asia/Pyongyang (KST)',
    },
    Qatar: {
      offset: 180,
      name: 'Asia/Qatar',
      label: 'Asia/Qatar (+03)',
    },
    Qyzylorda: { // cSpell:disable-line
      offset: 360,
      name: 'Asia/Qyzylorda', // cSpell:disable-line
      label: 'Asia/Qyzylorda (+06)', // cSpell:disable-line
    },
    Riyadh: {
      offset: 180,
      name: 'Asia/Riyadh',
      label: 'Asia/Riyadh (+03)',
    },
    Sakhalin: {
      offset: 660,
      name: 'Asia/Sakhalin',
      label: 'Asia/Sakhalin (+11)',
    },
    Samarkand: {
      offset: 300,
      name: 'Asia/Samarkand',
      label: 'Asia/Samarkand (+05)',
    },
    Seoul: {
      offset: 540,
      name: 'Asia/Seoul',
      label: 'Asia/Seoul (KST)',
    },
    Shanghai: {
      offset: 480,
      name: 'Asia/Shanghai',
      label: 'Asia/Shanghai (CST)',
    },
    Singapore: {
      offset: 480,
      name: 'Asia/Singapore',
      label: 'Asia/Singapore (+08)',
    },
    Srednekolymsk: { // cSpell:disable-line
      offset: 660,
      name: 'Asia/Srednekolymsk', // cSpell:disable-line
      label: 'Asia/Srednekolymsk (+11)', // cSpell:disable-line
    },
    Taipei: {
      offset: 480,
      name: 'Asia/Taipei',
      label: 'Asia/Taipei (CST)',
    },
    Tashkent: {
      offset: 300,
      name: 'Asia/Tashkent',
      label: 'Asia/Tashkent (+05)',
    },
    Tbilisi: {
      offset: 240,
      name: 'Asia/Tbilisi',
      label: 'Asia/Tbilisi (+04)',
    },
    Tehran: {
      offset: 270,
      name: 'Asia/Tehran',
      label: 'Asia/Tehran (+04:30)',
    },
    Thimphu: {
      offset: 360,
      name: 'Asia/Thimphu',
      label: 'Asia/Thimphu (+06)',
    },
    Tokyo: {
      offset: 540,
      name: 'Asia/Tokyo',
      label: 'Asia/Tokyo (JST)',
    },
    Tomsk: {
      offset: 420,
      name: 'Asia/Tomsk',
      label: 'Asia/Tomsk (+07)',
    },
    Ulaanbaatar: { // cSpell:disable-line
      offset: 480,
      name: 'Asia/Ulaanbaatar', // cSpell:disable-line
      label: 'Asia/Ulaanbaatar (+08)', // cSpell:disable-line
    },
    Urumqi: {
      offset: 360,
      name: 'Asia/Urumqi',
      label: 'Asia/Urumqi (+06)',
    },
    UstNera: { // cSpell:disable-line
      offset: 600,
      name: 'Asia/Ust-Nera', // cSpell:disable-line
      label: 'Asia/Ust-Nera (+10)', // cSpell:disable-line
    },
    Vientiane: {
      offset: 420,
      name: 'Asia/Vientiane',
      label: 'Asia/Vientiane (+07)',
    },
    Vladivostok: {
      offset: 600,
      name: 'Asia/Vladivostok',
      label: 'Asia/Vladivostok (+10)',
    },
    Yakutsk: {
      offset: 540,
      name: 'Asia/Yakutsk',
      label: 'Asia/Yakutsk (+09)',
    },
    Yangon: {
      offset: 630,
      name: 'Asia/Yangon',
      label: 'Asia/Yangon (+06:30)',
    },
    Yekaterinburg: {
      offset: 300,
      name: 'Asia/Yekaterinburg',
      label: 'Asia/Yekaterinburg (+05)',
    },
    Yerevan: {
      offset: 240,
      name: 'Asia/Yerevan',
      label: 'Asia/Yerevan (+04)',
    },
  },
  Atlantic: {
    Azores: {
      offset: 0,
      name: 'Atlantic/Azores',
      label: 'Atlantic/Azores (+00)',
    },
    Bermuda: {
      offset: -180,
      name: 'Atlantic/Bermuda',
      label: 'Atlantic/Bermuda (ADT)',
    },
    Canary: {
      offset: 60,
      name: 'Atlantic/Canary',
      label: 'Atlantic/Canary (WEST)',
    },
    Cape_Verde: {
      offset: -60,
      name: 'Atlantic/Cape_Verde',
      label: 'Atlantic/Cape Verde (-01)',
    },
    Faroe: {
      offset: 60,
      name: 'Atlantic/Faroe',
      label: 'Atlantic/Faroe (WEST)',
    },
    Madeira: {
      offset: 60,
      name: 'Atlantic/Madeira',
      label: 'Atlantic/Madeira (WEST)',
    },
    Reykjavik: {
      offset: 0,
      name: 'Atlantic/Reykjavik',
      label: 'Atlantic/Reykjavik (GMT)',
    },
    South_Georgia: {
      offset: -120,
      name: 'Atlantic/South_Georgia',
      label: 'Atlantic/South Georgia (-02)',
    },
    St_Helena: {
      offset: 0,
      name: 'Atlantic/St_Helena',
      label: 'Atlantic/St_Helena (GMT)',
    },
    Stanley: {
      offset: -180,
      name: 'Atlantic/Stanley',
      label: 'Atlantic/Stanley (-03)',
    },
  },
  Australia: {
    Adelaide: {
      offset: 570,
      name: 'Australia/Adelaide',
      label: 'Australia/Adelaide (ACST)', // cSpell:disable-line
    },
    Brisbane: {
      offset: 600,
      name: 'Australia/Brisbane',
      label: 'Australia/Brisbane (AEST)', // cSpell:disable-line
    },
    Broken_Hill: {
      offset: 570,
      name: 'Australia/Broken_Hill',
      label: 'Australia/Broken Hill (ACST)', // cSpell:disable-line
    },
    Currie: {
      offset: 600,
      name: 'Australia/Currie',
      label: 'Australia/Currie (AEST)', // cSpell:disable-line
    },
    Darwin: {
      offset: 570,
      name: 'Australia/Darwin',
      label: 'Australia/Darwin (ACST)', // cSpell:disable-line
    },
    Eucla: { // cSpell:disable-line
      offset: 525,
      name: 'Australia/Eucla', // cSpell:disable-line
      label: 'Australia/Eucla (+08:45)', // cSpell:disable-line
    },
    Hobart: {
      offset: 600,
      name: 'Australia/Hobart',
      label: 'Australia/Hobart (AEST)', // cSpell:disable-line
    },
    Lindeman: { // cSpell:disable-line
      offset: 600,
      name: 'Australia/Lindeman', // cSpell:disable-line
      label: 'Australia/Lindeman (AEST)', // cSpell:disable-line
    },
    Lord_Howe: {
      offset: 630,
      name: 'Australia/Lord_Howe',
      label: 'Australia/Lord Howe (+10:30)',
    },
    Melbourne: {
      offset: 600,
      name: 'Australia/Melbourne',
      label: 'Australia/Melbourne (AEST)', // cSpell:disable-line
    },
    Perth: {
      offset: 480,
      name: 'Australia/Perth',
      label: 'Australia/Perth (AWST)', // cSpell:disable-line
    },
    Sydney: {
      offset: 600,
      name: 'Australia/Sydney',
      label: 'Australia/Sydney (AEST)', // cSpell:disable-line
    },
  },
  Europe: {
    Amsterdam: {
      offset: 120,
      name: 'Europe/Amsterdam',
      label: 'Europe/Amsterdam (CEST)',
    },
    Andorra: {
      offset: 120,
      name: 'Europe/Andorra',
      label: 'Europe/Andorra (CEST)',
    },
    Astrakhan: {
      offset: 240,
      name: 'Europe/Astrakhan',
      label: 'Europe/Astrakhan (+04)',
    },
    Athens: {
      offset: 180,
      name: 'Europe/Athens',
      label: 'Europe/Athens (EEST)',
    },
    Belgrade: {
      offset: 120,
      name: 'Europe/Belgrade',
      label: 'Europe/Belgrade (CEST)',
    },
    Berlin: {
      offset: 120,
      name: 'Europe/Berlin',
      label: 'Europe/Berlin (CEST)',
    },
    Bratislava: {
      offset: 120,
      name: 'Europe/Bratislava',
      label: 'Europe/Bratislava (CEST)',
    },
    Brussels: {
      offset: 120,
      name: 'Europe/Brussels',
      label: 'Europe/Brussels (CEST)',
    },
    Bucharest: {
      offset: 180,
      name: 'Europe/Bucharest',
      label: 'Europe/Bucharest (EEST)',
    },
    Budapest: {
      offset: 120,
      name: 'Europe/Budapest',
      label: 'Europe/Budapest (CEST)',
    },
    Busingen: { // cSpell:disable-line
      offset: 120,
      name: 'Europe/Busingen', // cSpell:disable-line
      label: 'Europe/Busingen (CEST)', // cSpell:disable-line
    },
    Chisinau: {
      offset: 180,
      name: 'Europe/Chisinau',
      label: 'Europe/Chisinau (EEST)',
    },
    Copenhagen: {
      offset: 120,
      name: 'Europe/Copenhagen',
      label: 'Europe/Copenhagen (CEST)',
    },
    Dublin: {
      offset: 60,
      name: 'Europe/Dublin',
      label: 'Europe/Dublin (IST)',
    },
    Gibraltar: {
      offset: 120,
      name: 'Europe/Gibraltar',
      label: 'Europe/Gibraltar (CEST)',
    },
    Guernsey: {
      offset: 60,
      name: 'Europe/Guernsey',
      label: 'Europe/Guernsey (BST)',
    },
    Helsinki: {
      offset: 180,
      name: 'Europe/Helsinki',
      label: 'Europe/Helsinki (EEST)',
    },
    IsleOfMan: {
      offset: 60,
      name: 'Europe/Isle_of_Man',
      label: 'Europe/Isle of Man (BST)',
    },
    Istanbul: {
      offset: 180,
      name: 'Europe/Istanbul',
      label: 'Europe/Istanbul (+03)',
    },
    Jersey: {
      offset: 60,
      name: 'Europe/Jersey',
      label: 'Europe/Jersey (BST)',
    },
    Kaliningrad: {
      offset: 120,
      name: 'Europe/Kaliningrad',
      label: 'Europe/Kaliningrad (EET)',
    },
    Kiev: {
      offset: 180,
      name: 'Europe/Kiev',
      label: 'Europe/Kiev (EEST)',
    },
    Kirov: {
      offset: 180,
      name: 'Europe/Kirov',
      label: 'Europe/Kirov (+03)',
    },
    Lisbon: {
      offset: 60,
      name: 'Europe/Lisbon',
      label: 'Europe/Lisbon (WEST)',
    },
    Ljubljana: {
      offset: 120,
      name: 'Europe/Ljubljana',
      label: 'Europe/Ljubljana (CEST)',
    },
    London: {
      offset: 60,
      name: 'Europe/London',
      label: 'Europe/London (BST)',
    },
    Luxembourg: {
      offset: 120,
      name: 'Europe/Luxembourg',
      label: 'Europe/Luxembourg (CEST)',
    },
    Madrid: {
      offset: 120,
      name: 'Europe/Madrid',
      label: 'Europe/Madrid (CEST)',
    },
    Malta: {
      offset: 120,
      name: 'Europe/Malta',
      label: 'Europe/Malta (CEST)',
    },
    Mariehamn: {
      offset: 180,
      name: 'Europe/Mariehamn',
      label: 'Europe/Mariehamn (EEST)',
    },
    Minsk: {
      offset: 180,
      name: 'Europe/Minsk',
      label: 'Europe/Minsk (+03)',
    },
    Monaco: {
      offset: 120,
      name: 'Europe/Monaco',
      label: 'Europe/Monaco (CEST)',
    },
    Moscow: {
      offset: 180,
      name: 'Europe/Moscow',
      label: 'Europe/Moscow (MSK)',
    },
    Oslo: {
      offset: 120,
      name: 'Europe/Oslo',
      label: 'Europe/Oslo (CEST)',
    },
    Paris: {
      offset: 120,
      name: 'Europe/Paris',
      label: 'Europe/Paris (CEST)',
    },
    Podgorica: {
      offset: 120,
      name: 'Europe/Podgorica',
      label: 'Europe/Podgorica (CEST)',
    },
    Prague: {
      offset: 120,
      name: 'Europe/Prague',
      label: 'Europe/Prague (CEST)',
    },
    Riga: {
      offset: 180,
      name: 'Europe/Riga',
      label: 'Europe/Riga (EEST)',
    },
    Rome: {
      offset: 120,
      name: 'Europe/Rome',
      label: 'Europe/Rome (CEST)',
    },
    Samara: {
      offset: 240,
      name: 'Europe/Samara',
      label: 'Europe/Samara (+04)',
    },
    SanMarino: { // cSpell:disable-line
      offset: 120,
      name: 'Europe/San_Marino', // cSpell:disable-line
      label: 'Europe/San Marino (CEST)', // cSpell:disable-line
    },
    Sarajevo: {
      offset: 120,
      name: 'Europe/Sarajevo',
      label: 'Europe/Sarajevo (CEST)',
    },
    Saratov: {
      offset: 240,
      name: 'Europe/Saratov',
      label: 'Europe/Saratov (+04)',
    },
    Simferopol: {
      offset: 180,
      name: 'Europe/Simferopol',
      label: 'Europe/Simferopol (MSK)',
    },
    Skopje: {
      offset: 120,
      name: 'Europe/Skopje',
      label: 'Europe/Skopje (CEST)',
    },
    Sofia: {
      offset: 180,
      name: 'Europe/Sofia',
      label: 'Europe/Sofia (EEST)',
    },
    Stockholm: {
      offset: 120,
      name: 'Europe/Stockholm',
      label: 'Europe/Stockholm (CEST)',
    },
    Tallinn: {
      offset: 180,
      name: 'Europe/Tallinn',
      label: 'Europe/Tallinn (EEST)',
    },
    Tirane: {
      offset: 120,
      name: 'Europe/Tirane',
      label: 'Europe/Tirane (CEST)',
    },
    Ulyanovsk: {
      offset: 240,
      name: 'Europe/Ulyanovsk',
      label: 'Europe/Ulyanovsk (+04)',
    },
    Uzhgorod: { // cSpell:disable-line
      offset: 180,
      name: 'Europe/Uzhgorod', // cSpell:disable-line
      label: 'Europe/Uzhgorod (EEST)', // cSpell:disable-line
    },
    Vaduz: {
      offset: 120,
      name: 'Europe/Vaduz',
      label: 'Europe/Vaduz (CEST)',
    },
    Vatican: {
      offset: 120,
      name: 'Europe/Vatican',
      label: 'Europe/Vatican (CEST)',
    },
    Vienna: {
      offset: 120,
      name: 'Europe/Vienna',
      label: 'Europe/Vienna (CEST)',
    },
    Vilnius: {
      offset: 180,
      name: 'Europe/Vilnius',
      label: 'Europe/Vilnius (EEST)',
    },
    Volgograd: {
      offset: 180,
      name: 'Europe/Volgograd',
      label: 'Europe/Volgograd (+03)',
    },
    Warsaw: {
      offset: 120,
      name: 'Europe/Warsaw',
      label: 'Europe/Warsaw (CEST)',
    },
    Zagreb: {
      offset: 120,
      name: 'Europe/Zagreb',
      label: 'Europe/Zagreb (CEST)',
    },
    Zaporozhye: {
      offset: 180,
      name: 'Europe/Zaporozhye',
      label: 'Europe/Zaporozhye (EEST)',
    },
    Zurich: {
      offset: 120,
      name: 'Europe/Zurich',
      label: 'Europe/Zurich (CEST)',
    },
  },
  Indian: {
    Antananarivo: {
      offset: 180,
      name: 'Indian/Antananarivo',
      label: 'Indian/Antananarivo (EAT)',
    },
    Chagos: {
      offset: 360,
      name: 'Indian/Chagos',
      label: 'Indian/Chagos (+06)',
    },
    Christmas: {
      offset: 420,
      name: 'Indian/Christmas',
      label: 'Indian/Christmas (+07)',
    },
    Cocos: {
      offset: 390,
      name: 'Indian/Cocos',
      label: 'Indian/Cocos (+06:30)',
    },
    Comoro: {
      offset: 180,
      name: 'Indian/Comoro',
      label: 'Indian/Comoro (EAT)',
    },
    Kerguelen: {
      offset: 300,
      name: 'Indian/Kerguelen',
      label: 'Indian/Kerguelen (+05)',
    },
    Mahe: { // cSpell:disable-line
      offset: 240,
      name: 'Indian/Mahe', // cSpell:disable-line
      label: 'Indian/Mahe (+04)', // cSpell:disable-line
    },
    Maldives: {
      offset: 300,
      name: 'Indian/Maldives',
      label: 'Indian/Maldives (+05)',
    },
    Mauritius: {
      offset: 240,
      name: 'Indian/Mauritius',
      label: 'Indian/Mauritius (+04)',
    },
    Mayotte: {
      offset: 180,
      name: 'Indian/Mayotte',
      label: 'Indian/Mayotte (EAT)',
    },
    Reunion: {
      offset: 240,
      name: 'Indian/Reunion',
      label: 'Indian/Reunion (+04)',
    },
  },
  Pacific: {
    Apia: {
      offset: 780,
      name: 'Pacific/Apia',
      label: 'Pacific/Apia (+13)',
    },
    Auckland: {
      offset: 720,
      name: 'Pacific/Auckland',
      label: 'Pacific/Auckland (NZST)',
    },
    Bougainville: {
      offset: 660,
      name: 'Pacific/Bougainville',
      label: 'Pacific/Bougainville (+11)',
    },
    Chatham: {
      offset: 765,
      name: 'Pacific/Chatham',
      label: 'Pacific/Chatham (+12:45)',
    },
    Chuuk: { // cSpell:disable-line
      offset: 600,
      name: 'Pacific/Chuuk', // cSpell:disable-line
      label: 'Pacific/Chuuk (+10)', // cSpell:disable-line
    },
    Easter: {
      offset: -360,
      name: 'Pacific/Easter',
      label: 'Pacific/Easter (-06)',
    },
    Efate: { // cSpell:disable-line
      offset: 660,
      name: 'Pacific/Efate', // cSpell:disable-line
      label: 'Pacific/Efate (+11)', // cSpell:disable-line
    },
    Enderbury: {
      offset: 780,
      name: 'Pacific/Enderbury',
      label: 'Pacific/Enderbury (+13)',
    },
    Fakaofo: { // cSpell:disable-line
      offset: 780,
      name: 'Pacific/Fakaofo', // cSpell:disable-line
      label: 'Pacific/Fakaofo (+13)', // cSpell:disable-line
    },
    Fiji: {
      offset: 720,
      name: 'Pacific/Fiji',
      label: 'Pacific/Fiji (+12)',
    },
    Funafuti: {
      offset: 720,
      name: 'Pacific/Funafuti',
      label: 'Pacific/Funafuti (+12)',
    },
    Galapagos: {
      offset: -360,
      name: 'Pacific/Galapagos',
      label: 'Pacific/Galapagos (-06)',
    },
    Gambier: {
      offset: -540,
      name: 'Pacific/Gambier',
      label: 'Pacific/Gambier (-09)',
    },
    Guadalcanal: {
      offset: 660,
      name: 'Pacific/Guadalcanal',
      label: 'Pacific/Guadalcanal (+11)',
    },
    Guam: {
      offset: 600,
      name: 'Pacific/Guam',
      label: 'Pacific/Guam (ChST)',
    },
    Honolulu: {
      offset: -600,
      name: 'Pacific/Honolulu',
      label: 'Pacific/Honolulu (HST)',
    },
    Kiritimati: { // cSpell:disable-line
      offset: 840,
      name: 'Pacific/Kiritimati', // cSpell:disable-line
      label: 'Pacific/Kiritimati (+14)', // cSpell:disable-line
    },
    Kosrae: {
      offset: 660,
      name: 'Pacific/Kosrae',
      label: 'Pacific/Kosrae (+11)',
    },
    Kwajalein: {
      offset: 720,
      name: 'Pacific/Kwajalein',
      label: 'Pacific/Kwajalein (+12)',
    },
    Majuro: {
      offset: 720,
      name: 'Pacific/Majuro',
      label: 'Pacific/Majuro (+12)',
    },
    Marquesas: {
      offset: -570,
      name: 'Pacific/Marquesas',
      label: 'Pacific/Marquesas (-09:30)',
    },
    Midway: {
      offset: -660,
      name: 'Pacific/Midway',
      label: 'Pacific/Midway (SST)',
    },
    Nauru: {
      offset: 720,
      name: 'Pacific/Nauru',
      label: 'Pacific/Nauru (+12)',
    },
    Niue: {
      offset: -660,
      name: 'Pacific/Niue',
      label: 'Pacific/Niue (-11)',
    },
    Norfolk: {
      offset: 660,
      name: 'Pacific/Norfolk',
      label: 'Pacific/Norfolk (+11)',
    },
    Noumea: {
      offset: 660,
      name: 'Pacific/Noumea',
      label: 'Pacific/Noumea (+11)',
    },
    PagoPago: { // cSpell:disable-line
      offset: -660,
      name: 'Pacific/Pago_Pago', // cSpell:disable-line
      label: 'Pacific/Pago Pago (SST)', // cSpell:disable-line
    },
    Palau: {
      offset: 540,
      name: 'Pacific/Palau',
      label: 'Pacific/Palau (+09)',
    },
    Pitcairn: {
      offset: -480,
      name: 'Pacific/Pitcairn',
      label: 'Pacific/Pitcairn (-08)',
    },
    Pohnpei: { // cSpell:disable-line
      offset: 660,
      name: 'Pacific/Pohnpei', // cSpell:disable-line
      label: 'Pacific/Pohnpei (+11)', // cSpell:disable-line
    },
    PortMoresby: { // cSpell:disable-line
      offset: 600,
      name: 'Pacific/Port_Moresby', // cSpell:disable-line
      label: 'Pacific/Port Moresby (+10)', // cSpell:disable-line
    },
    Rarotonga: {
      offset: -600,
      name: 'Pacific/Rarotonga',
      label: 'Pacific/Rarotonga (-10)',
    },
    Saipan: {
      offset: 600,
      name: 'Pacific/Saipan',
      label: 'Pacific/Saipan (ChST)',
    },
    Tahiti: {
      offset: -600,
      name: 'Pacific/Tahiti',
      label: 'Pacific/Tahiti (-10)',
    },
    Tarawa: {
      offset: 720,
      name: 'Pacific/Tarawa',
      label: 'Pacific/Tarawa (+12)',
    },
    Tongatapu: { // cSpell:disable-line
      offset: 780,
      name: 'Pacific/Tongatapu', // cSpell:disable-line
      label: 'Pacific/Tongatapu (+13)', // cSpell:disable-line
    },
    Wake: {
      offset: 720,
      name: 'Pacific/Wake',
      label: 'Pacific/Wake (+12)',
    },
    Wallis: {
      offset: 720,
      name: 'Pacific/Wallis',
      label: 'Pacific/Wallis (+12)',
    },
  },
  UTC: {
    offset: 0,
    name: 'UTC',
    label: 'UTC'
  },
};

/**
 * Checks if a given IANA timezone is supported by the Intl API.
 *
 * @param timeZone - IANA timezone string (e.g., 'America/New_York')
 * @returns true if supported, false otherwise
 */
export function isSupported(timezone: Timezone): boolean {
  const supported: string[] | undefined = (Intl as any)?.supportedValuesOf?.('timeZone');

  if (supported) {
    return supported.includes(timezone.name);
  }

  // fallback: try creating a DateTimeFormat
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: timezone.name });
    return true;
  } catch {
    return false;
  }
}

export default timezones;
