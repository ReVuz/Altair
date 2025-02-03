import '../styles/globals.css';

export const metadata = {
  title: 'Altair',
  description: 'transforms simulation into a simple and powerful tool for design optimization. With its intuitive interface and comprehensive features, Inspire helps you push the boundaries of component design and accelerate product development from concept to reality. Whether you are aiming for performance or manufacturability, Inspire offers a seamless experience to create, optimize, and study innovative parts and assemblies.',
};
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
