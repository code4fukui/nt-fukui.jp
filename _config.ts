import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const lumeOptions: Parameters<typeof lume>[0] = {
  src: "./src",
}

const site = lume(lumeOptions);
site.add("CNAME")
site.use(jsx({pageSubExtension: ".page"}))

export default site;
