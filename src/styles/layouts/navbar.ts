const navbarProperties = {
  logo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  logoDesktop: {
    display: { xs: "none", md: "flex" },
    mr: 2,
  },
  logoMobile: {
    display: { xs: "flex", md: "none" },
    mr: 2,
    flexGrow: 1,
  },
  navMenuMobile: {
    display: { xs: "block", md: "none" },
  },
  navMenuDesktop: {
    display: { xs: "none", md: "flex" },
    flexGrow: 1,
    justifyContent: "center",
  },
  navButton: {
    my: 2,
    color: "white",
    display: "block",
  },
  userMenuIcon: {
    p: 0,
  },
  userMenu: {
    mt: "45px",
  },
  appBarContainer: {
    maxWidth: "xl",
  },
  appBar: {
    backgroundColor: "blue",
  },
};

export default navbarProperties;
