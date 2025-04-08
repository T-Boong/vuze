import { supabase } from "@/lib/supabase";

export const uploadProfileImage = async (userId: string, file: File) => {
  const filePath = `${userId}/profile.jpg`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from("profile-images")
    .upload(filePath, buffer, {
      upsert: true,
      contentType: file.type,
    });

  if (uploadError) {
    throw new Error(`프로필 이미지 업로드 실패: ${uploadError.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from("profile-images")
    .getPublicUrl(filePath);

  return publicUrlData?.publicUrl ?? null;
};
