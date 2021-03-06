(function(root) {
	var GoogleWebFontsProvider = root.GoogleWebFontsProvider = function(options) {
		return this.initialize(options || {});
	};

	GoogleWebFontsProvider.SUBSETS = [ 
		'latin', 
		'latin-ext', 
		'greek', 
		'hebrew', 
		'vietnamese', 
		'arabic', 
		'devanagari', 
		'cyrillic', 
		'cyrillic-ext', 
		'khmer', 
		'greek-ext', 
		'tamil', 
		'thai', 
		'telugu', 
		'bengali', 
		'gujarati'
	];

  	GoogleWebFontsProvider.VARIANTS = [
  		'100', 
  		'100italic', 
  		'200', 
  		'200italic', 
  		'300', 
  		'300italic', 
  		'400', 
  		'400italic', 
  		'500',
  		'500italic', 
  		'600', 
  		'600italic', 
  		'700', 
  		'700italic', 
  		'800', 
  		'800italic', 
  		'900', 
  		'900italic'
  	];

	GoogleWebFontsProvider.PROVIDER = 'google';
	GoogleWebFontsProvider.FEATURED_FONTS = [
		'Abril Fatface',
		'Aileron Thin',
		'Aileron Regular',
		'Aileron Heavy',
		'Alegreya Small Caps',
		'Aleo Light',
		'Aleo',
		'Alfa Slab One',
		'Alike',
		'Allerta Stencil',
		'Allura',
		'Amaranth',
		'Amatic Small Caps',
		'Anonymous Pro',
		'Antic',
		'Anton',
		'Architects Daughter',
		'Archivo Narrow',
		'Arimo',
		'Arvo',
		'Berkshire Swash',
		'Black Ops One',
		'Bodoni FLF',
		'Cabin Sketch',
		'Cantora One',
		'Cardo',
		'Carter One',
		'Chewy',
		'Cinzel',
		'Clicker Script',
		'Codystar',
		'Coming Soon',
		'Cooper Hewitt',
		'Courgette',
		'Coustard',
		'Crafty Girls',
		'Creepster',
		'Crushed',
		'Diplomata Small Caps',
		'Dr Sugiyama',
		'Droid Sans',
		'Droid Serif',
		'Economica',
		'Emilys Candy',
		'Engagement',
		'Euphoria Script',
		'Exo Thin',
		'Exo',
		'Forum',
		'Fredoka One',
		'Gentium Book Basic',
		'Germania One',
		'Gidole',
		'Glass Antiqua',
		'Glegoo',
		'Gochi Hand',
		'Graduate',
		'Granaina',
		'Grand Hotel',
		'Gravitas One',
		'Great Vibes',
		'Gruppo',
		'Hammersmith One',
		'Helvetica',
		'Hitchcut',
		'IM Fell',
		'IM Fell English Small Caps',
		'Inconsolata',
		'Josefin Sans',
		'Josefin Slab',
		'Julius Sans One',
		'Kaushan Script',
		'Kite One',
		'Knewave',
		'Lato Hairline',
		'Lato',
		'Lato Heavy',
		'League Gothic',
		'League Spartan',
		'Libre Baskerville',
		'Lilita One',
		'Limelight',
		'Lobster Two',
		'Londrina Shadow',
		'Londrina Sketch',
		'Lora',
		'Lustria',
		'Luthier',
		'Megrim',
		'Merriweather',
		'Montserrat Hairline',
		'Montserrat Light',
		'Montserrat',
		'Mr Dafoe',
		'Niconne',
		'Nixie One',
		'Norwester',
		'Nunito Light',
		'Nunito',
		'Old Standard TT',
		'Oleo Script',
		'Open Sans Light',
		'Open Sans',
		'Open Sans Extra Bold',
		'Open Source Pro',
		'Oregano',
		'Oswald',
		'Over The Rainbow',
		'Pacifico',
		'Parisienne',
		'Permanent Marker',
		'Pinyon Script',
		'Pirou',
		'Playfair Display',
		'Playfair Display Black',
		'Playfair Small Caps',
		'Prata',
		'Princess Sofia',
		'PT Mono',
		'PT Sans',
		'PT Sans Narrow',
		'PT Serif',
		'Quando',
		'Quattrocento',
		'Quicksand',
		'Racing Sans One',
		'Raleway Thin',
		'Raleway',
		'Raleway Heavy',
		'Ribeye',
		'Roboto',
		'Roboto Condensed',
		'Roboto Slab',
		'Rosario',
		'Rubik Mono One',
		'Rubik One',
		'Rye',
		'Sacramento',
		'Sanchez',
		'Satisfy',
		'Schoolbell',
		'Shadows Into Light',
		'Sifonn',
		'Sifonn Outline',
		'Signika',
		'Six Caps',
		'Sniglet',
		'Source Sans Pro',
		'Source Serif Pro',
		'Special Elite',
		'Sunday',
		'Text Me One',
		'Times New Roman',
		'Trocchi',
		'Ubuntu',
		'Ultra',
		'UnifrakturMaguntia',
		'Vampiro One',
		'Vast Shadow',
		'Vidaloka',
		'Vollkorn',
		'VT323',
		'Yellowtail'
	];

	GoogleWebFontsProvider.prototype.initialize = function(options) {
		return this;
	};

	GoogleWebFontsProvider.prototype.featured = function() {
		return GoogleWebFontsProvider.FEATURED_FONTS;
	};

	GoogleWebFontsProvider.prototype.fetch = function() {
		return this.parse(root.GOOGLE_WEBFONT_LIST);
	};

	GoogleWebFontsProvider.prototype.parse = function(items) {
		return items.map(function(item) {
			var attrs = root.extend(item, {
				preview: true,
				featured: GoogleWebFontsProvider.FEATURED_FONTS.indexOf(item.family) > -1,
				provider: GoogleWebFontsProvider.PROVIDER
			});
			return new root.Webfont(attrs);
		});
	};

})(MQ);
