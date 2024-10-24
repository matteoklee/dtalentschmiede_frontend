<template>
  <div>
    <!-- drawer init and toggle -->
    <div class="text-center">
      <button
        type="button"
        data-drawer-target="drawer-full-example"
        data-drawer-show="drawer-full-example"
        data-drawer-placement="right"
        aria-controls="drawer-full-example"
        class="bg-red-700 shadow-md px-6 py-3 rounded-lg hover:bg-red-800 hover:text-white text-white lg:mr-4 w-full font-medium"
      >
        Erstellen
      </button>
    </div>

    <!-- drawer component -->
    <!-- bg-black bg-gradient-to-r from-purple-800/50 from-10% via-indigo-700/50 via-30% to-blue-900/50 to-90%     bg-slate-900 -->
    <div
      id="drawer-full-example"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-50 w-full translate-x-full bg-gray-50"
      tabindex="-1"
      aria-labelledby="drawer-full-label"
    >
      <div class="">
        <div class="max-w-screen-xl mx-auto justify-center items-center">
          <div class="my-4 w-full flex justify-between items-center">
            <div class="">
              <HeaderLogo class=""></HeaderLogo>
            </div>

            <div class="">
              <button
                type="button"
                @click="closeDrawer"
                data-drawer-hide="drawer-full-example"
                aria-controls="drawer-full-example"
                class="text-gray-400 bg-transparent hover:text-gray-800 rounded-lg inline-flex items-center justify-center"
              >
                <!-- absolute top-2.5 end-2.5  -->
                <IconClose class="h-8 w-8"></IconClose>
                <span class="sr-only">Close menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto w-full">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto">
          <div class="flex flex-col justify-center items-start">
            <div>
              <p class="text-5xl font-bold text-left py-4">
                Erstelle ein neues <span class="text-primary-700">IT-Projekt</span> oder kreiere eine neue <span class="text-primary-700">Idee</span>.
              </p>
            </div>
            <p class="py-2 text-lg">Fülle dein Projekt mit Leben.</p>
          </div>
          <div>
            <img src="@/assets/img_5.png" />
          </div>
        </div>
      </div>




      <div class="max-w-screen-xl mx-auto w-full">
        <hr class="h-px my-8 bg-gray-300 border-0 rounded-lg">
      </div>

      <div v-if="true" class="max-w-screen-xl mx-auto w-full my-4">
        <div class="bg-blue-200 rounded-lg p-4 text-center">
          <div class="inline-flex items-center text-blue-700">
            <IconInfo class="w-4 h-4 mr-4"></IconInfo>
            <p class="text-black">Gib deinem Projekt einen Titel.</p>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto w-full">
        <div class="w-full">
          <h2 class="text-xl font-bold my-4">Projektname</h2>
          <div
              class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
          >
            <div class="flex items-center space-x-2 w-full relative mr-2">
              <IconFile class="h-5 text-gray-400"></IconFile>
              <input
                  v-model="project.projectTitle"
                  type="text"
                  id="projectSearch"
                  placeholder="Titel des Projekts"
                  required
                  class="border-0 text-xl w-full outline-none focus:ring-0 placeholder-gray-300 pr-6 font-medium text-center"
                  :disabled="titleValidated"
              />
              <button
                  v-if="!titleValidated"
                  @click="clear"
                  type="button"
                  class="absolute right-0"
              >
                <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
              </button>
              <button
                  v-else
                  type="button"
                  @click="resetTitle"
                  class="absolute right-0"
                  data-tooltip-target="tooltip-animation"
              >
                <IconClose class="h-5 w-5 text-gray-400 hover:text-red-700"></IconClose>
              </button>
            </div>
            <button
                v-if="!titleValidated"
                type="button"
                @click="validateTitle"
                class="hidden bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
            >
              Bestätigen
            </button>
          </div>

          <div
              id="tooltip-animation"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Titel zurücksetzen
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <p class="text-gray-400 font-normal text-md py-2">
            Example:
            <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
            <span class="border px-3 py-1 mx-2 rounded-md">Plugin Excel</span>
            <span class="border px-3 py-1 mx-2 rounded-md">Access DB Update</span>
          </p>
        </div>
      </div>

      <div v-if="titleValidated" class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto my-8">
          <div class="col-span-2 w-full pb-3">
            <div class="bg-blue-200 rounded-lg p-4 text-center">
              <div class="inline-flex items-center text-blue-700">
                <IconInfo class="w-4 h-4 mr-4"></IconInfo>
                <p class="text-black">Wähle eine Kategorie.</p>
              </div>
            </div>
          </div>

          <div class="hidden grid lg:grid-cols-2 grid-cols-1 gap-8 py-6">
            <div class="">
              <p class="text-2xl font-bold">Kategorie</p>
              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="flex items-center space-x-2 w-full relative mr-2">
                  <IconCode class="h-5 text-gray-400"></IconCode>
                  <input
                      v-model="searchQuery"
                      @input="searchProject"
                      type="text"
                      id="projectSearch"
                      placeholder="Dein Titel des Projekts"
                      required
                      class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
                  />
                  <button type="button" @click="clear" class="absolute right-0">
                    <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
                  </button>
                </div>
              </div>

              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="w-full relative">
                  <IconList class="h-5 text-gray-400 absolute left-0 top-3"></IconList>
                  <textarea
                      rows="8"
                      class="pl-8 block p-2.5 w-full text-gray-900 border-0 focus:ring-0"
                      placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <p class="text-gray-400 font-normal text-md py-2">
                Example:
                <span class="border px-3 py-1 mx-2 rounded-md">IT-Projekt</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Abschlussarbeit</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Hospitation</span>
              </p>
            </div>

            <div class="">
              <p class="text-2xl font-bold">Kategorie</p>
              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="flex items-center space-x-2 w-full relative mr-2">
                  <IconFile class="h-5 text-gray-400"></IconFile>
                  <input
                      v-model="searchQuery"
                      @input="searchProject"
                      type="text"
                      id="projectSearch"
                      placeholder="Dein Titel des Projekts"
                      required
                      class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
                  />
                  <button type="button" @click="clear" class="absolute right-0">
                    <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
                  </button>
                </div>
                <a
                    type="button"
                    href="#projects"
                    class="bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
                >Bestätigen</a
                >
              </div>

              <p class="text-gray-400 font-normal text-md py-2">
                Example:
                <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Plugin Excel</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Access DB Update</span>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto w-full my-8">
          <div class="p-4 w-full bg-white rounded-lg shadow-lg">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">

              <div class="lg:border-r-2 lg:border-0 lg:px-4">
                <h2 class="text-xl font-bold my-4">Kategorie</h2>

                <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">

                  <!-- IT-Projekt -->
                  <div class="">
                    <input
                      type="checkbox"
                      v-model="selectedType"
                      id="project"
                      name="project"
                      value="PROJECT"
                      class="hidden peer"
                    />
                    <label
                      for="project"
                      class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                      :class="selectedType === 'project' ? 'bg-gray-100' : 'bg-white'"
                    >
                      <div
                        class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                      >
                        <IconLightbulb
                          class="w-10 h-10"
                          :class="
                            selectedType === 'project' ? 'text-blue-600' : 'text-gray-300'
                          "
                        ></IconLightbulb>
                        <span class="text-lg font-medium text-gray-700 pt-2">IT-Projekt</span>
                      </div>
                      <IconCheck
                        v-if="selectedType === 'project'"
                        class="w-6 h-6 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                      ></IconCheck>
                    </label>
                  </div>
                  <!-- Practice -->
                  <div class="">
                    <input
                        type="checkbox"
                        v-model="selectedType"
                        id="practice"
                        name="practice"
                        value="PRACTICE"
                        class="hidden peer"
                    />
                    <label
                        for="practice"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedType === 'practice' ? 'bg-gray-100' : 'bg-white'"
                    >
                      <div
                          class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                      >
                        <IconTools
                            class="w-10 h-10"
                            :class="
                            selectedType === 'practice' ? 'text-blue-600' : 'text-gray-300'"
                        ></IconTools>
                        <span class="text-lg font-medium text-gray-700 pt-2">Praxisstation</span>
                      </div>
                      <IconCheck
                          v-if="selectedType === 'practice'"
                          class="w-6 h-6 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                      ></IconCheck>
                    </label>
                  </div>
                  <!-- Thesis -->
                  <div class="">
                    <input
                        type="checkbox"
                        v-model="selectedType"
                        id="thesis"
                        name="thesis"
                        value="THESIS"
                        class="hidden peer"
                    />
                    <label
                        for="thesis"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedType === 'thesis' ? 'bg-gray-100' : 'bg-white'"
                    >
                      <div
                          class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                      >
                        <IconBook
                            class="w-10 h-10"
                            :class="
                            selectedType === 'thesis' ? 'text-blue-600' : 'text-gray-300'
                          "
                        ></IconBook>
                        <span class="text-lg font-medium text-gray-700 pt-2">Thesis</span>
                      </div>
                      <IconCheck
                          v-if="selectedType === 'thesis'"
                          class="w-6 h-6 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                      ></IconCheck>
                    </label>
                  </div>
                  <!-- Other -->
                  <div class="">
                    <input
                        type="checkbox"
                        v-model="selectedType"
                        id="other"
                        name="other"
                        value="OTHER"
                        class="hidden peer"
                    />
                    <label
                        for="other"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedType === 'other' ? 'bg-gray-100' : 'bg-white'"
                    >
                      <div
                          class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                      >
                        <IconOther
                            class="w-10 h-10"
                            :class="
                            selectedType === 'other' ? 'text-blue-600' : 'text-gray-300'
                          "
                        ></IconOther>
                        <span class="text-lg font-medium text-gray-700 pt-2">Andere</span>
                      </div>
                      <IconCheck
                          v-if="selectedType === 'other'"
                          class="w-6 h-6 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                      ></IconCheck>
                    </label>
                  </div>

                </div>

                <h2 class="text-xl font-bold my-4">Technologien</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">

                  <div v-for="(item, index) in technologies" :key="index">
                    <!-- Technology -->
                    <div class="">
                      <input
                          type="checkbox"
                          v-model="selectedTechnologies"
                          :id="`technology-${index}`"
                          :value="item.title"
                          class="hidden peer"
                      />
                      <label
                          :for="`technology-${index}`"
                          class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                          :class="selectedTechnologies.includes(item.title) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div
                            class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                        >
                          <component :is="item.icon" class="w-8 h-8" :class="selectedTechnologies.includes(item.title) ? 'text-blue-600' : 'text-gray-300'"></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{ item.title }}</span>
                        </div>
                        <IconCheck
                            v-if="selectedTechnologies.includes(item.title)"
                            class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>

                </div>

                <h2 class="text-xl font-bold my-4">Hard Skills</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">

                  <div v-for="(item, index) in hardSkills" :key="index">
                    <!-- Technology -->
                    <div class="">
                      <input
                          type="checkbox"
                          v-model="selectedHardSkills"
                          :id="`hardSkill-${index}`"
                          :value="item.title"
                          class="hidden peer"
                      />
                      <label
                          :for="`hardSkill-${index}`"
                          class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                          :class="selectedHardSkills.includes(item.title) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div
                            class="inline-flex flex-col items-center my-2 mt-auto text-center"
                        >
                          <component :is="item.icon" class="w-8 h-8" :class="selectedHardSkills.includes(item.title) ? 'text-blue-600' : 'text-gray-300'"></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{ item.title }}</span>
                        </div>
                        <IconCheck
                            v-if="selectedHardSkills.includes(item.title)"
                            class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>

                </div>


                <h2 class="text-xl font-bold my-4">Soft Skills</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">

                  <div v-for="(item, index) in softSkills" :key="index">
                    <!-- Technology -->
                    <div class="">
                      <input
                          type="checkbox"
                          v-model="selectedSoftSkills"
                          :id="`softSkill-${index}`"
                          :value="item.title"
                          class="hidden peer"
                      />
                      <label
                          :for="`softSkill-${index}`"
                          class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                          :class="selectedSoftSkills.includes(item.title) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div
                            class="inline-flex flex-col items-center my-2 mt-auto text-center"
                        >
                          <component :is="item.icon" class="w-8 h-8" :class="selectedSoftSkills.includes(item.title) ? 'text-blue-600' : 'text-gray-300'"></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{ item.title }}</span>
                        </div>
                        <IconCheck
                            v-if="selectedSoftSkills.includes(item.title)"
                            class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>

                </div>

              </div>

              <div class="px-2">
                <h2 class="text-xl font-bold my-4">Eigenschaften</h2>
                <div class="hidden mb-4">
                  <label for="name" class="block text-sm font-medium pb-1">Projektname *</label>
                  <input
                    type="text"
                    id="name"
                    class="w-full p-4 bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
                    placeholder="Untitled project"
                  />
                </div>

                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium pb-1">Projektbeschreibung *</label>
                  <div
                      class="flex items-center space-x-2 bg-gray-50 py-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
                  >
                    <div class="w-full relative">
                      <IconList class="h-5 absolute left-0 top-3"></IconList>
                      <textarea
                          v-model="project.projectDescription"
                          id="description"
                          rows="16"
                          class="pl-8 block p-2.5 w-full border-0 focus:ring-0 bg-transparent"
                          placeholder="Das Projekt BeispielXY soll ... (Requirements, Environment, Tasks, TechStack)"
                      ></textarea>
                    </div>
                  </div>

                </div>

                <div class="hidden mb-4">
                  <label for="device" class="block text-sm font-medium pb-1">Auswahl *</label>
                  <select
                    id="device"
                    class="w-full p-4 border rounded-lg text-lg focus:ring-0 bg-gray-50 border-0 shadow-md"
                  >
                    <option value="web-1366">Web 1366</option>
                    <option value="web-1920">Web 1920</option>
                    <option value="mobile-360">Mobile 360</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label for="device" class="block text-sm font-medium pb-1">Deadline (falls nötig)</label>
                  <div class="inline-flex items-center w-full bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0">
                    <IconCalendar class="w-4 h-4 ml-4"></IconCalendar>
                    <input id="datepicker-format" datepicker datepicker-min-date="09/16/2024" datepicker-max-date="12/31/2099" type="text"
                           class="w-full p-4 bg-gray-50 border-0 focus:ring-0" placeholder="Deadline auswählen" />
                  </div>
                </div>

                <div class="mb-2">
                  <h2 class="text-sm font-medium pb-4">Projektstatus festlegen</h2>
                  <div class="flex space-x-4">
                    <div :class="{'border-blue-600 border-2 bg-gray-50': selectedStatus === 'DRAFT'}"
                        class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer" @click="selectStatus('DRAFT')">
                      <IconPencil class="w-4 h-4"></IconPencil>
                      <span class="ml-2 block text-sm font-medium text-gray-700">ENTWURF</span>
                    </div>

                    <div :class="{'border-blue-600 border-2 bg-gray-50': selectedStatus === 'OPEN'}"
                         class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer" @click="selectStatus('OPEN')">
                      <IconFolder class="w-4 h-4"></IconFolder>
                      <span class="ml-2 block text-sm font-medium text-gray-700">OFFEN</span>
                    </div>
                  </div>
                </div>


                <div class="mb-4">
                  <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold my-4">Projektansprechpartner</h2>
                    <button type="button" class="bg-gray-400 hover:bg-gray-500 rounded-lg px-3 py-2 text-white">
                      Daten aus Profil übernehmen
                    </button>
                  </div>

                    <div class="w-full mb-4">
                      <label for="name" class="block text-sm font-medium pb-1">Name</label>
                      <div class="inline-flex items-center w-full bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0">
                        <IconUser class="w-4 h-4 ml-4 mr-0"></IconUser>
                        <input
                            v-model="project.projectRepresentative"
                            type="text"
                            id="name"
                            class="w-full p-4 bg-gray-50 border-0 focus:ring-0"
                            placeholder="Matteo Kleemann"
                            required
                        />
                      </div>
                    </div>
                    <div class="w-full">
                      <label for="name" class="block text-sm font-medium pb-1">E-Mail</label>
                      <div class="inline-flex items-center w-full  bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0">
                        <IconEmail class="w-5 h-5 ml-4 mr-0"></IconEmail>
                        <input
                            v-model="project.projectRepresentativeEmail"
                            type="email"
                            id="name"
                            class="w-full p-4 bg-gray-50 border-0 focus:ring-0"
                            placeholder="matteoachim.kleemann@dataport.de"
                            required
                        />
                      </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-end">
                  <button type="button" @click="submit" data-drawer-hide="drawer-full-example" class="inline-flex items-center bg-primary-700 rounded-lg px-4 py-2.5 text-white">
                    <IconSubmit class="w-5 h-5 mr-4 font-normal"></IconSubmit>
                    Erstellen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <FooterInfo></FooterInfo>
        <FooterNav></FooterNav>
        <FooterCopyright></FooterCopyright>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import IconClose from '@/components/project/details/icon/IconClose.vue'
import HeaderLogo from '@/components/navigation/header/HeaderLogo.vue'
import FooterCopyright from '@/components/navigation/footer/FooterCopyright.vue'
import FooterNav from '@/components/navigation/footer/FooterNav.vue'
import FooterInfo from '@/components/navigation/footer/FooterInfo.vue'
import IconFile from '@/components/project2/icons/IconFile.vue'
import IconCode from '@/components/project2/icons/IconCode.vue'
import IconError from '@/components/project2/icons/IconError.vue'
import IconList from '@/components/home/icons/IconList.vue'
import IconInfo from '@/components/project2/icons/IconInfo.vue'
import IconCheck from '@/components/project2/icons/IconCheck.vue'
import IconBook from '@/components/project2/icons/IconBook.vue'
import IconLightbulb from '@/components/project2/icons/IconLightbulb.vue'
import IconTools from '@/components/project2/icons/IconTools.vue'
import IconOther from '@/components/project2/icons/IconOther.vue'
import IconSubmit from "@/components/project2/icons/IconSubmit.vue";
import IconVue from "@/components/project2/icons/technology/IconVue.vue";
import IconVuetify from "@/components/project2/icons/technology/IconVuetify.vue";
import IconJava from "@/components/project2/icons/technology/IconJava.vue";
import IconJavascript from "@/components/project2/icons/technology/IconJavascript.vue";
import IconNode from "@/components/project2/icons/technology/IconNode.vue";
import IconDatabase from "@/components/project2/icons/technology/IconDatabase.vue";
import IconServer from "@/components/project2/icons/technology/IconServer.vue";
import IconDocker from "@/components/project2/icons/technology/IconDocker.vue";
import IconSpring from "@/components/project2/icons/technology/IconSpring.vue";

import {markRaw} from "vue";
import IconEmail from "@/components/project2/icons/IconEmail.vue";
import IconUser from "@/components/navigation/header/profile/icons/IconUser.vue";
import IconSecurity from "@/components/project2/icons/technology/IconSecurity.vue";
import IconAgil from "@/components/project2/icons/technology/IconAgil.vue";
import IconGit from "@/components/project2/icons/technology/IconGit.vue";
import IconTesting from "@/components/project2/icons/technology/IconTesting.vue";
import IconArchitecture from "@/components/project2/icons/technology/IconArchitecture.vue";
import IconHandshake from "@/components/project2/icons/technology/IconHandshake.vue";
import IconClock from "@/components/project2/icons/technology/IconClock.vue";
import IconClipboard from "@/components/project2/icons/technology/IconClipboard.vue";
import IconUsers from "@/components/project2/icons/IconUsers.vue";
import IconCalendar from "@/components/project/details/icon/IconCalendar.vue";
import IconFolder from "@/components/home/icons/IconFolder.vue";
import IconPencil from "@/components/project2/icons/IconPencil.vue";

import {createProject} from "@/services/projectService.js";
export default {
  name: 'ProjectAddDrawer',
  components: {
    IconPencil,
    IconFolder,
    IconCalendar,
    IconUsers,
    IconClipboard,
    IconClock,
    IconHandshake,
    IconArchitecture,
    IconTesting,
    IconGit,
    IconAgil,
    IconSecurity,
    IconUser,
    IconEmail,
    IconSpring,
    IconDocker,
    IconServer,
    IconDatabase,
    IconNode,
    IconJavascript,
    IconJava,
    IconVuetify,
    IconSubmit,
    IconOther,
    IconTools,
    IconLightbulb,
    IconBook,
    IconCheck,
    IconInfo,
    IconList,
    IconError,
    IconCode,
    IconFile,
    FooterInfo,
    FooterNav,
    FooterCopyright,
    HeaderLogo,
    IconClose,
    IconVue
  },
  data() {
    return {
      isDrawerOpen: false,
      title: '',
      titleValidated: false,
      selectedType: [],
      selectedHardSkills: [],
      selectedSoftSkills: [],
      selectedTechnologies: [],
      selectedStatus: "ENTWURF",

      project: {
        projectTitle: '',
        projectDescription: '',
        projectRepresentative: '',
        projectRepresentativeEmail: '',
        projectTypes: [],
        projectHardSkills: [],
        projectSoftSkills: [],
        projectTechnologies: [],
        projectStatus: ''
      },
      hardSkills: [
        {
          title: "DEVOPS",
          icon: markRaw(IconServer)
        },
        {
          title: "PROGRAMMING",
          icon: markRaw(IconCode)
        },
        {
          title: "DATABASE_MANAGEMENT",
          icon: markRaw(IconDatabase)
        },
        {
          title: "SECURITY",
          icon: markRaw(IconSecurity)
        },
        {
          title: "AGILE",
          icon: markRaw(IconAgil)
        },
        {
          title: "DOCUMENTATION",
          icon: markRaw(IconFile)
        },
        {
          title: "VERSION_CONTROL",
          icon: markRaw(IconGit)
        },
        {
          title: "TESTING",
          icon: markRaw(IconTesting)
        },
        {
          title: "SOFTWARE_ARCHITECTURE",
          icon: markRaw(IconArchitecture)
        },

      ],
      softSkills: [
        {
          title: "REQUIREMENTS_ENGINEERING",
          icon: markRaw(IconClipboard)
        },
        {
          title: "PROJECT_MANAGEMENT",
          icon: markRaw(IconList)
        },
        {
          title: "CLIENT_INTERACTION",
          icon: markRaw(IconHandshake)
        },
        {
          title: "PROBLEM_SOLVING",
          icon: markRaw(IconLightbulb)
        },
        {
          title: "TEAMWORK",
          icon: markRaw(IconUsers)
        },
        {
          title: "TIME_MANAGEMENT",
          icon: markRaw(IconClock)
        },
        {
          title: "OTHER",
          icon: markRaw(IconOther)
        },
      ],
      technologies: [
        {
          title: "VUE_JS",
          icon: markRaw(IconVue)
        },
        {
          title: "VUETIFY",
          icon: markRaw(IconVuetify)
        },
        {
          title: "JAVA",
          icon: markRaw(IconJava)
        },
        {
          title: "JAVASCRIPT",
          icon: markRaw(IconJavascript)
        },
        {
          title: "NODE_JS",
          icon: markRaw(IconNode)
        },
        {
          title: "SPRING_BOOT",
          icon: markRaw(IconSpring)
        },
        {
          title: "DOCKER",
          icon: markRaw(IconDocker)
        },
        {
          title: "OTHER",
          icon: markRaw(IconOther)
        },
      ]
    }
  },
  methods: {
    validateTitle() {
      this.titleValidated = this.title !== ''
    },
    resetTitle() {
      this.titleValidated = false
      this.title = ''
    },
    clear() {
      this.title = ''
    },
    selectStatus(status) {
      this.selectedStatus = status;
    },
    submit() {
      if (this.project.projectTitle && this.project.projectDescription && this.project.projectRepresentative && this.project.projectRepresentativeEmail) {
        this.project.projectTypes = this.selectedType;
        this.project.projectTechnologies = this.selectedTechnologies;
        this.project.projectHardSkills = this.selectedHardSkills;
        this.project.projectSoftSkills = this.selectedSoftSkills;
        this.project.projectStatus = this.selectedStatus;
        this.createProject();
      } else {
        console.error('input data for new project is incomplete.');
      }
    },
    async createProject() {
      try {
        const response = await createProject(this.project);
        if (response.ok) {
          this.$emit("submitProject", true);
          this.clearInput();
        }
      } catch (error) {
        console.error('error creating project:', error);
      }
    },
    clearInput() {
      this.project = {
        projectTitle: '',
        projectDescription: '',
        projectRepresentative: '',
        projectRepresentativeEmail: '',
        projectTypes: [],
        projectHardSkills: [],
        projectSoftSkills: [],
        projectTechnologies: [],
        projectStatus: ''
      };
      this.selectedTechnologies = [];
      this.selectedHardSkills = [];
      this.selectedSoftSkills = [];
    },
    submitForm() {
      console.log('Projekt wurde angelegt:', this.project)
      alert('Projekt erfolgreich angelegt!')
      this.project = {
        title: '',
        description: '',
        technologies: '',
        scope: '',
        startDate: new Date().toISOString().split('T')[0],
        supervisor: ''
      }
    }
  },
  mounted() {
    initFlowbite();
  },
}
</script>

<style scoped></style>
