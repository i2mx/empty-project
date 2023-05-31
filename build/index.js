console.log("i want to die i wantt to die i want to die i want to die");
import {createClient} from "./_snowpack/pkg/@supabase/supabase-js.js";
const URL = "https://keoxdjnovfiolnuhxbdj.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlb3hkam5vdmZpb2xudWh4YmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MDM0NTAsImV4cCI6MjAwMDQ3OTQ1MH0._gCopahUMmdg0JFrTvzpenKnOXlaaKt4EViSwFe6HXI";
const supabase = createClient(URL, KEY);
supabase.from("mytable").select("id").then((res) => {
  console.log(res.data);
});
