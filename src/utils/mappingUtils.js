export const technologyMappings = {
  VUE_JS: 'Vue.js',
  SPRING_BOOT: 'Spring Boot',
  JAVA: 'Java',
  JAVASCRIPT: 'JavaScript',
  VUETIFY: 'Vuetify',
  NODE_JS: 'Node.js',
  DOCKER: 'Docker'
};

export const projectStatusMappings = {
  DRAFT: 'Entwurf',
  OPEN: 'Offen',
  IN_PROGRESS: 'in Bearbeitung',
  COMPLETED: 'Abgeschlossen',
  CANCELLED: 'Abgebrochen',
  ARCHIVED: 'Archiviert'
};

export const projectTypeMappings = {
  PROJECT: 'Projekt',
  THESIS: 'Abschlussarbeit',
  PRACTICE: 'Praktikum',
  OTHER: 'Andere'
};

export const softSkillMappings = {
  CLIENT_INTERACTION: 'Kunden',
  REQUIREMENTS_ENGINEERING: 'Anforderung',
  TEAMWORK: 'Team',
  PROBLEM_SOLVING: 'Lösung',
  TIME_MANAGEMENT: 'Zeit',
  PROJECT_MANAGEMENT: 'Planung'
};

export const hardSkillMappings = {
  PROGRAMMING: 'Entwicklung',
  DEVOPS: 'DevOps',
  SOFTWARE_ARCHITECTURE: 'Architektur',
  AGILE: 'Agilität',
  TESTING: 'Testen',
  VERSION_CONTROL: 'Version',
  DOCUMENTATION: 'Doku',
  SECURITY: 'Sicherheit',
  DATABASE_MANAGEMENT: 'Datenbank'
};

export function getReadableValue(value, mapping) {
  return mapping[value] || value;
}

export function getReadableTechnology(technology) {
  return getReadableValue(technology, technologyMappings);
}

export function getReadableProjectType(projectType) {
  return getReadableValue(projectType, projectTypeMappings);
}

export function getReadableSoftSkill(softSkill) {
  return getReadableValue(softSkill, softSkillMappings);
}

export function getReadableHardSkill(hardSkill) {
  return getReadableValue(hardSkill, hardSkillMappings);
}

export function getReadableProjectStatus(status) {
  return getReadableValue(status, projectStatusMappings);
}
