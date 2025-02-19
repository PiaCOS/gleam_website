import app/web
import gleam/string_tree
import simplifile
import wisp

pub fn handle_request(req: wisp.Request, ctx: web.Context) -> wisp.Response {
  use _req <- web.middleware(req, ctx)

  case simplifile.read(from: ctx.static_directory <> "/index.html") {
    Ok(content) -> {
      let body = string_tree.from_string(content)
      wisp.html_response(body, 200)
    }
    Error(_) -> {
      let error_body = string_tree.from_string("<h1>404 - Not Found</h1>")
      wisp.html_response(error_body, 400)
    }
  }
}
