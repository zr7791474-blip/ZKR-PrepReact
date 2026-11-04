import "@testing-library/jest-dom";

// jsdom ne fournit pas window.scrollTo : les fiches l'appellent au montage.
window.scrollTo = jest.fn();
