package models;

import java.io.Serializable;

/**
 * Created by Alfaville on 8/6/16.
 */
public class Pessoa implements Serializable {

    public Long id;

    public String nome;

    public String cpf;

    public Pessoa() {

    }

    public Pessoa(Long id, String nome, String cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

}
