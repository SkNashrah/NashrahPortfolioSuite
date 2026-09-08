export type SocialLink = {
    id: string;
    label: string;
    href: string;
    icon: string;
    sub_label: string;
    sort_order: number;
    is_active: boolean;
};

export type PersonalInfo = {
    id: string;
    name: string;
    tagline: string;
    bio: string;
    avatar_text: string;
    availability: boolean;
    availability_label: string;
};

export type ContactSettings = {
    id: string;
    email: string;
    availability_message: string;
    availability_sub: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    case_study: string | null;
    technologies: string[];
    category: string;
    status: string;
    live_url: string | null;
    github_url: string | null;
    client_name: string | null;
    cover_image_url: string | null;
    is_featured: boolean;
    is_published: boolean;
    sort_order: number;
};

export type SkillGroup = {
    id: string;
    title: string;
    color: string;
    sort_order: number;
    skills?: Skill[];
};

export type Skill = {
    id: string;
    skill_group_id: string;
    name: string;
    icon_url: string | null;
    years_exp: number | null;
    is_primary: boolean;
    sort_order: number;
};

export type Experience = {
    id: string;
    year: string;
    title: string;
    company: string;
    company_url: string | null;
    description: string;
    employment_type: string;
    location: string | null;
    technologies: string[];
    is_current: boolean;
    sort_order: number;
    achievements?: ExperienceAchievement[];
};

export type ExperienceAchievement = {
    id: string;
    experience_id: string;
    achievement: string;
    sort_order: number;
};

export type Artwork = {
    id: string;
    title: string;
    description: string | null;
    image_url: string;
    category: string;
    is_for_sale: boolean;
    is_commission: boolean;
    request_quote: boolean;
    price: number | null;
    is_client_work: boolean;
    instagram_url: string | null;
    pinterest_url: string | null;
    is_published: boolean;
    sort_order: number;
};

export type Service = {
    id: string;
    name: string;
    description: string;
    starting_price: number | null;
    price_label: string;
    delivery_time: string | null;
    is_available: boolean;
    sort_order: number;
};

export type Testimonial = {
    id: string;
    client_name: string;
    client_role: string;
    client_company: string | null;
    client_photo: string | null;
    review: string;
    rating: number;
    project_id: string | null;
    is_approved: boolean;
};

export type Language = {
    id: string;
    name: string;
    flag_emoji: string;
    speak: string;
    read: string;
    write: string;
    sort_order: number;
};

export type Inquiry = {
    id: string;
    name: string;
    email: string;
    message: string;
    inquiry_type: string;
    status: string;
    created_at: string;
};