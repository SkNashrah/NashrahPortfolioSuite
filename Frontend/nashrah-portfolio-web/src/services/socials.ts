import { createClient } from "@/lib/supabase/client";
import { SocialLink } from "@/types/database";

export async function getSocialLinks(): Promise<SocialLink[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("social_links")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");

    if (error) { console.error(error); return []; }
    return data ?? [];
}