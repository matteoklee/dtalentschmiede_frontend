import IconVue from '@/components/icons/technology/IconVue.vue';
import IconVuetify from '@/components/icons/technology/IconVuetify.vue';
import IconJava from '@/components/icons/technology/IconJava.vue';
import IconJavascript from '@/components/icons/technology/IconJavascript.vue';
import IconNode from '@/components/icons/technology/IconNode.vue';
import IconSpring from '@/components/icons/technology/IconSpring.vue';
import IconDocker from '@/components/icons/technology/IconDocker.vue';
import IconOther from '@/components/icons/IconOther.vue';
import IconLightbulb from '@/components/icons/IconLightbulb.vue';
import IconTools from '@/components/icons/IconTools.vue';
import IconBook from '@/components/icons/IconBook.vue';
import IconServer from '@/components/icons/technology/IconServer.vue';
import IconCode from '@/components/icons/IconCode.vue';
import IconDatabase from '@/components/icons/technology/IconDatabase.vue';
import IconSecurity from '@/components/icons/technology/IconSecurity.vue';
import IconAgil from '@/components/icons/technology/IconAgil.vue';
import IconGit from '@/components/icons/technology/IconGit.vue';
import IconTesting from '@/components/icons/technology/IconTesting.vue';
import IconArchitecture from '@/components/icons/technology/IconArchitecture.vue';
import IconFile from '@/components/icons/IconFile.vue';
import IconClipboard from '@/components/icons/technology/IconClipboard.vue';
import IconList from '@/components/home/icons/IconList.vue';
import IconHandshake from '@/components/icons/technology/IconHandshake.vue';
import IconUsers from '@/components/icons/IconUsers.vue';
import IconClock from '@/components/icons/technology/IconClock.vue';

export function getTechnologyIcon(technologyValue) {
  switch (technologyValue) {
    case 'VUE_JS':
      return IconVue;
    case 'VUETIFY':
      return IconVuetify;
    case 'JAVA':
      return IconJava;
    case 'JAVASCRIPT':
      return IconJavascript;
    case 'NODE_JS':
      return IconNode;
    case 'SPRING_BOOT':
      return IconSpring;
    case 'DOCKER':
      return IconDocker;
    default:
      return IconOther;
  }
}

export function getProjectTypeIcon(projectTypeValue) {
  switch (projectTypeValue) {
    case 'PROJECT':
      return IconLightbulb;
    case 'PRACTICE':
      return IconTools;
    case 'THESIS':
      return IconBook;
    default:
      return IconOther;
  }
}

export function getHardSkillIcon(skillName) {
  switch (skillName) {
    case 'DEVOPS':
      return IconServer;
    case 'PROGRAMMING':
      return IconCode;
    case 'DATABASE_MANAGEMENT':
      return IconDatabase;
    case 'SECURITY':
      return IconSecurity;
    case 'AGILE':
      return IconAgil;
    case 'DOCUMENTATION':
      return IconFile;
    case 'VERSION_CONTROL':
      return IconGit;
    case 'TESTING':
      return IconTesting;
    case 'SOFTWARE_ARCHITECTURE':
      return IconArchitecture;
    default:
      return IconOther;
  }
}

export function getSoftSkillIcon(skillName) {
  switch (skillName) {
    case 'REQUIREMENTS_ENGINEERING':
      return IconClipboard;
    case 'PROJECT_MANAGEMENT':
      return IconList;
    case 'CLIENT_INTERACTION':
      return IconHandshake;
    case 'PROBLEM_SOLVING':
      return IconLightbulb;
    case 'TEAMWORK':
      return IconUsers;
    case 'TIME_MANAGEMENT':
      return IconClock;
    default:
      return IconOther;
  }
}
