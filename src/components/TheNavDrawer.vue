<template>
  <header>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-folder"
              title="Overview"
              value="myfiles"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-multiple"
              title="Shared with me"
              value="shared"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-star"
              title="Starred"
              value="starred"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main
          class="d-flex align-center justify-around"
          style="height: 100px"
        >
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">
            Dashboard 💰
          </v-card-title>
          <div class="border border-gray-300 rounded-md">
            <TheInput placeholder="Search..." type="text" variant="sign-input">
              <TheIcon class="ml-5" icon="search" />
            </TheInput>
          </div>
          <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-arrow-down"
                color="primary"
                v-bind="props"
              >
                Sandra Adams
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-main>
      </v-layout>
    </v-card>
  </header>
</template>

<script>
import TheInput from "@/components/TheInput.vue";
import TheIcon from "@/components/TheIcon.vue";
export default {
  data: () => ({
    items: [
      { title: "Your profile" },
      { title: "Balance" },
      { title: "Your Stars" },
      { title: "Help" },
      { title: "Sign out" },
    ],
  }),
  name: "TheNavDrawer",
  components: {
    TheInput,
    TheIcon,
  },
};
</script>
