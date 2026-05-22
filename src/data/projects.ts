// =====================================================================
//  Atelier Masr — portfolio / Work entries
//  TO ADD A NEW PROJECT: copy one { ... } block, paste it at the TOP of
//  the array, and edit the fields. Newest first. See README for details.
//
//  - image:    optional. Drop the file in  public/work/  and reference it
//              as '/work/your-file.jpg'. If omitted, the monogram shows.
//  - url:      optional. A live link. Internal links start with '/',
//              external links start with 'https://'.
//  - monogram: the letter shown on the card when there is no image.
// =====================================================================

export interface Project {
  slug: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  tagAr: string;
  tagEn: string;
  image?: string;
  url?: string;
  monogram?: string;
}

export const projects: Project[] = [
  {
    slug: 'atelier-masr-site',
    titleAr: 'موقع أتيليه مصر',
    titleEn: 'Atelier Masr Website',
    descAr: 'الموقع الذي تتصفّحه الآن. صمّمناه وبنيناه بأنفسنا — بنفس العناية التي نمنحها لكل عميل.',
    descEn: 'The very site you are browsing. Designed and built in-house — with the same care we give every client.',
    tagAr: 'الاستوديو · موقع تعريفي',
    tagEn: 'The studio · Brand site',
    monogram: 'أ',
  },
];
