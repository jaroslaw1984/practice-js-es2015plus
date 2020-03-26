"use strict";

export default class Junior {
  constructor(skills = null, experience = null, willingness = null) {
    this.skills = this.isNumber(skills) ? skills : this.getSkillsRandomNumber();
    this.experience = this.isNumber(experience)
      ? experience
      : this.getExperinceRandomNumber();
    this.willingness = this.isNumber(willingness)
      ? willingness
      : this.getWillingnessRandomNumber();
  }

  isNumber(value) {
    if (typeof value === "number" && value === value) {
      return true;
    }

    return false;
  }

  getSkillsRandomNumber() {
    return this.getRandomNumber(...this.getMinMaxSkills());
  }
  getExperinceRandomNumber() {
    return this.getRandomNumber(...this.getMinMaxExperience());
  }

  getWillingnessRandomNumber() {
    return this.getRandomNumber(...this.getMinMaxWilligness());
  }

  getMinMaxSkills() {
    return [0, 30];
  }

  getMinMaxExperience() {
    return [0, 30];
  }

  getMinMaxWilligness() {
    return [30, 70];
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
