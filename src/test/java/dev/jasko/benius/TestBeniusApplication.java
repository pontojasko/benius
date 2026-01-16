package dev.jasko.benius;

import org.springframework.boot.SpringApplication;

public class TestBeniusApplication {

	public static void main(String[] args) {
		SpringApplication.from(BeniusApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
