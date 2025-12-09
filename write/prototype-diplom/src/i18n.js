import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    mn: {
      translation: {
        home: "Нүүр",
        login: "Нэвтрэх",
        register: "Бүртгүүлэх",
        search_placeholder: "Хайлт...",
        detail: "Дэлгэрэнгүй",
        back: "Буцах",
        name: "Нэр",
        location: "Байршил",
        era: "Үе",
        description: "Тайлбар",
      },
    },

    en: {
      translation: {
        home: "Home",
        login: "Login",
        register: "Register",
        search_placeholder: "Search...",
        detail: "View Details",
        back: "Back",
        name: "Name",
        location: "Location",
        era: "Era",
        description: "Description",
      },
    },
  },

  lng: "mn", // default хэл
  fallbackLng: "mn",
  interpolation: { escapeValue: false },
});

export default i18n;
