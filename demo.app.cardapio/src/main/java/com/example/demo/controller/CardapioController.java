package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ComidaRequisicaoDTO;
import com.example.demo.DTO.ComidaRespostaDTO;
import com.example.demo.entities.Comida;
import com.example.demo.services.ComidaService;

@RestController
@RequestMapping(value="/cardapio")
@CrossOrigin(origins="*")
public class CardapioController {

	@Autowired
	private ComidaService comidaService;
	
	@GetMapping
	public ResponseEntity<List<ComidaRespostaDTO>> getAll() {
		List<ComidaRespostaDTO> lista = comidaService.getComidas().stream().map(ComidaRespostaDTO:: new).toList();
		return ResponseEntity.ok().body(lista);
	}
	
	@CrossOrigin(origins=" http://127.0.0.1:5173/", allowedHeaders = "*")
	@PostMapping
	public ResponseEntity<ComidaRequisicaoDTO> salvarComida(@RequestBody ComidaRequisicaoDTO comida){
		Comida commida = new Comida(null, comida.titulo(), comida.imagem(), comida.preco());
		commida = comidaService.salvarComida(commida);
		return ResponseEntity.ok().build();
	}
}
