package com.seremba.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.seremba.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
