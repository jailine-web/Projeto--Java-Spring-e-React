package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Comida;
import com.example.demo.repositories.ComidaRepository;

import jakarta.transaction.Transactional;

@Service
public class ComidaService {

	@Autowired
	private ComidaRepository comidaRepository;
	
	@Transactional
	public List<Comida> getComidas() {
		List<Comida> comidas = comidaRepository.findAll();
		return comidas;
	}
	
	@Transactional
	public Comida salvarComida(Comida comida) {
		Comida c = comidaRepository.save(comida);
		return c;
	}
}
