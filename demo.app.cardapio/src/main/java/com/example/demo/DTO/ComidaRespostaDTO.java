package com.example.demo.DTO;

import com.example.demo.entities.Comida;

public record ComidaRespostaDTO(Long id, String titulo, String imagem, Double preco) {
	
	public ComidaRespostaDTO (Comida comida) {
		this(comida.getId(),comida.getTitulo(),comida.getImagem(),comida.getPreco());
	}
}
