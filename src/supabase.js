
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://obmtgvkqgnanjdvdbobr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibXRndmtxZ25hbmpkdmRib2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzE5NTEsImV4cCI6MjAwNTcwNzk1MX0.PHFP9IbOrwJiH2wazYOen79U-Kn34De5u5Trweki59w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;