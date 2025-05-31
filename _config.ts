import lume from "lume/mod.ts";

const lumeOptions: Parameters<typeof lume>[0] = {
  src: "./src",
  dest: "./docs",
}

const site = lume(lumeOptions);
site.add("CNAME")

export default site;
