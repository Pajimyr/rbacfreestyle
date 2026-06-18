import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

export const supabase = createClient(
  process.env.SUPAURL!,
  process.env.SUPASECKEY!,
);
