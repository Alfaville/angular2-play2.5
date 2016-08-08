package controllers;

import models.Pessoa;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.Arrays;
import java.util.List;

public class HomeController extends Controller {

    public Result index() {
        return ok(views.html.index.render("Index"));
    }

    public Result getPessoas() {
        Pessoa p1 = new Pessoa(1l, "Felipe", "03152019327");
        Pessoa p2 = new Pessoa(2l, "Alfaville", "03152019327");
        Pessoa p3 = new Pessoa(3l, "Joel", "03152019327");
        Pessoa p4 = new Pessoa(4l, "Paulo", "03152019327");
        Pessoa p5 = new Pessoa(5l, "Ada", "03152019327");
        Pessoa p6 = new Pessoa(6l, "Mãe", "03152019327");
        Pessoa p7 = new Pessoa(7l, "J", "03152019327");

        List<Pessoa> pessoas = Arrays.asList(p1,p2,p3,p4,p5,p6,p7);

        return ok(Json.toJson(pessoas));
    }

}
