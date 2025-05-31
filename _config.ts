import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const lumeOptions: Parameters<typeof lume>[0] = {
  src: "./src",
}

const site = lume(lumeOptions);
site.use(jsx({pageSubExtension: ".page"}));
site.use(tailwindcss());

site.add("style.css");
site.add("CNAME");
site.add("assets/")

export default site;
