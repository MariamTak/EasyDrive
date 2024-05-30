package com.example.EasyDrive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:8081")
@RestController
@RequestMapping
@Validated
public class voiture_controlleur {

    @Autowired
    private voitureRepository voitureRepository;

    @PostMapping("/api/voitures")
    public voiture creerVoiture(@RequestBody voiture voiture) {
        return voitureRepository.save(voiture);
    }
    


    @DeleteMapping("/api/delete/{id}")
    public ResponseEntity<?> supprimerVoitureParId(@PathVariable(value = "id") Long voitureId) {
        voiture voiture = voitureRepository.findById(voitureId)
                .orElseThrow();

        voitureRepository.delete(voiture);

        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/all/{user_id}")
    public ResponseEntity<voiture> obtenirVoitureParId(@PathVariable(value = "user_id") Long userId) {
        voiture voiture = voitureRepository.findById(userId)
                .orElseThrow();

        return ResponseEntity.ok().body(voiture);
    }



    @GetMapping("/all")
    public List<voiture> obtenirToutesLesVoitures() {
        return voitureRepository.findAll();
    }
}



