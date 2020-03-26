"use strict";

export default class Senior {
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
    return [50, 90];
  }

  getMinMaxExperience() {
    return [60, 90];
  }

  getMinMaxWilligness() {
    return [40, 60];
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
