const homeOffers = ({ homeReducer }) => homeReducer.offers.results;
const homeSections = ({ homeReducer }) => homeReducer.sections.results;
const homeBanners = ({ homeReducer }) => homeReducer.banners.results;

export { homeOffers, homeBanners, homeSections };
