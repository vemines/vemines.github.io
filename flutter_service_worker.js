'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "7c21f604364d83256f73548e94a90174",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e8b1c12d017e930957778e594bb21cea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7020a3e48e92d1eb2a42f29675a7af02",
".git/logs/refs/heads/main": "7020a3e48e92d1eb2a42f29675a7af02",
".git/logs/refs/remotes/origin/main": "1e9c8324ec0030753fcb558f6c894707",
".git/objects/02/d93bc14d7aa05f1423122c6bc50f47e5deb316": "23ac8d9ef8cae9a8321554f76ce6d26e",
".git/objects/02/e42c29a6aaf44e9dda393265d7f32858b3b694": "8659ec7d7c96925e0062a5007ee54b83",
".git/objects/03/eeb426ffdcae940c43064a37b59b8e2f38067a": "021b0959d9631ec30920017f258ead5c",
".git/objects/03/f4e91066564047d871f3cc741d5bdb29930e56": "8dc60932d207aede9ee9e6efe5b91a45",
".git/objects/04/99afece8caef9abde9cad472aa55db563a1db3": "38681fa47f84b16fdaf1802758364246",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/5b588a248bbe13ee41e5302c8ed48a8a8b4187": "fb4ba69c68a033dc0cf4e8c7c13207ac",
".git/objects/07/7bade46b0f504674a5d5829a8dd1cf847c16c4": "1a55d26086977c42f3c753fad1c4d7e7",
".git/objects/08/742e3a0d7a1004c750b35c876d3e1d696a918e": "cc5e50d20cc9e845b00103b46f024299",
".git/objects/08/e299b051d03912cec3bb22006240f349731708": "918fdc6da3e7406b916f2ada01c17ee9",
".git/objects/09/8220ad389b91925ffdd74dae906e459b2e9efb": "6e9e4c8936fee662333b5c396a834624",
".git/objects/09/aa14f8141d23e5420d9178906303084c3c735e": "a4665f1823947009736a9635ac05050a",
".git/objects/09/e8bfcdab4dec51cf2b7c88385736d5819e7e30": "d9a523e4d15550ddf6c15d17f2b30b5d",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/1a4f488a94c76c5185bc1c68f7aca0bbdcf6a3": "1cdf7ab5cc8c584128994a1075ad3db4",
".git/objects/0f/7a472a7e8eb95090375858ec5cd473eb80dd8f": "3b45e5fe9102b69abe834ecaa5efcb7a",
".git/objects/0f/b5e9ee0c711d79fb315567e891dcf5d832c70d": "dea6a767b21427903cb8b4246dcc1a2f",
".git/objects/10/7dd8a9f3450b8b58b63ffc70b217c752c700db": "cea9c7df22829a1b72c37e4c17e16011",
".git/objects/12/737fde833bfa41a29fa7d3e0894eb7c67bd2b1": "94e8e8f1c82455b12bbfcb61d3858e5e",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/19/8b09ef449f8c7bcc5b74325dc8d0d696943af7": "3be7f2975c4977e1f87cc3b5e8f3d397",
".git/objects/1a/9a8a2af74453938c2c4e35ec0d62e45cbbc9ce": "f16fcd1c65f226c2cb9853ffdb6a769f",
".git/objects/1c/75b830dbba8b8c4f5de375ca0bbd934e4f710b": "d361181cf856753e11910d7c23c9f3e5",
".git/objects/1c/762ac17741d7c67a48c9e13a1b021d11b4bcf6": "cdc1cced059b1d0e603ffd256b75c50b",
".git/objects/1e/b5f8830672a746647f9d37aa9203cb2d2604f0": "1c03bd0b65d1c2a4832334b30cad2942",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/b601055f7a23c2850dc0ff65cf29ab6ec3cebe": "68d2cff104323a032f3e577fe4da9e99",
".git/objects/24/55dc82e95e158426ff31b45cdf05df573efe39": "53d66d0166d77225439a753f5b8b4a41",
".git/objects/25/42e0c67f047615ef44fb30154fc13957ca7176": "22cfa67d1031fe303d0b3dca3a5a5bf4",
".git/objects/25/ec11da6b32293be10432a7353b5260dd7a33d8": "423b127954459e7507aa7a14b49ed05b",
".git/objects/26/8d851e3fe87917472d36ade0e86a7488e8cbb2": "e9be16c504d02e0474e1903f0696fda5",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/28/40e5ccae353e443bf84c755c627093f1940bff": "1ebe8a15e14bd59e7214f40e464a1620",
".git/objects/28/4665bd40a6b14e456f119e9f1774190b008d15": "33ff5e0a99e7abf4b3bd33d1e5914335",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/2a/4de1f3f6026bfa5c98906f0105c73b84fb5568": "ac43981489052747cde9c151663dc01e",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/e49f687741633848b885cfb400f91b870ba12c": "0aebb1318938e95ae0f37bd9c5b2a7c4",
".git/objects/2c/e0b171f874d71ef0990931455ca54bfa2d7dc1": "91671a50895b49364734b4ca306462cd",
".git/objects/2d/c3894e7a3b71dc713540063f2e574f8d6b10ba": "dcc4ea4eaaa394eb3239455b74fa0587",
".git/objects/2f/008e32e4675990f2f4ced770afdbd133a676ce": "660bb39e1cf33aa5d657572e8260801d",
".git/objects/2f/0fe52f8907359f158127c90c0a41b5f8a4caca": "d7f437121d2ff2d9b564304aef271bd5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/32/74234d0ce84eec8c650c166942878e61dbe238": "7f46b1b3ca225f25b4f01509a5f8fc94",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/32/ab471d3756021bb17a0854ef01e06d814245cd": "fa90d247d07e81f0ccbdf594ab183904",
".git/objects/32/f2a5fa35c7ef85ad184b470e679cc65bcaf0a4": "59af1a67f09d73016ed02e9834380f1c",
".git/objects/33/7bd5c4ecfd78a3ed8121956f8b2c3d42a62954": "21fcf27164f04cf16c82c4f45a706011",
".git/objects/34/54e3f97af41e3489725a03b7c38c721619348f": "eeec2d9f0d8bfcd9850886c8be1c93ac",
".git/objects/34/c9a1c98615edce95cdab8b7be0ca124b1c268c": "e81deea891108db130c7d80741d41ef0",
".git/objects/36/7df56450b8ae4e0f06ff9c7a0edf3c5a3e3c20": "fa44a991132a080e7cb9c3e3a401f4fa",
".git/objects/37/59181ffd23fec980678fd800327f437d3161dd": "bf97d98e5f241e85300f3b6286f1572d",
".git/objects/37/d1f46e95e4de0e4e66b8a8edb3066a6ab5a4ea": "2b4cb498524ab6aead3fca5a22ca67af",
".git/objects/38/88cad5c8be767bc77bdf5c0bff089bab71f0c2": "58a7c67dfa0ec1c06f8009b80360b041",
".git/objects/39/1538c3b8630fc19f42027299a96a90b1c00b8d": "3e7fbe3d50da1bb21cde94c3c2af0c9f",
".git/objects/39/e4d037591ef1197bf5b79837ca6d25231d9f9b": "56fe25965a33266961dc9daa719c4650",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9131fbf14c32047e7d6ab276f0e5c75e0afcc7": "20864bddc60f82bf44e44ec5aeee69a3",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3b/07dce2afeaf7294f783dc622ec338b7c9fc13d": "58cead53bf66716481878250a19a0a5e",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/3d/31ca3fabbb480eccc55356cfa0116a77299efd": "b201ab9379ba6f832f8891f994c15051",
".git/objects/3d/3b919be3f8370fc08db57662e5c9e76884a006": "b4152f26d848af9aabc5b20cbf89ce99",
".git/objects/3e/e4ed2d51eca59981da98dd72a159f9803c429c": "9fca7f442d96512a07b4643bcf0e39fb",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/40/cb2b108c82231b8e68f87bf6ba59f4184d44fa": "a404146a36f0bd696b18feeb03e1e579",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/8fd08597f202e38cd6e64b775a3a38e637d89a": "be24790963f69f71be7fbe3ac8d7a8cc",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/c19d114a28b3068e051ef692b3d0c470c9e6ca": "df509f9050167b62d0cf993b34bdfe25",
".git/objects/46/b2dcc489da8f90cbeaa916b72e00e87160dc61": "2bc5817c7ff74aaf44c0798beb7d9d3a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/550fd35d74659f700cdc79d3f527e0d1280e76": "5896de34be7fc26877bc870414c338a5",
".git/objects/49/7c3261f6a46655a47a2e9d78a9567dedf9ae56": "f1445b11e00542313933994e4192a022",
".git/objects/49/ec17a93898b560db0c9f3944c353e8f9c262de": "6c34ce3b22abf16fd0274dc17d878aa5",
".git/objects/4a/4a34d874e1a460f95adadc9c57cb3e8b36de96": "f9c311f00c203ae278789d16506e33b7",
".git/objects/4a/74876a9acb1aa3c0f3033667ef844cd3178b3b": "185b9dde5d69c0b15075d4d4659414b3",
".git/objects/4b/24ab88d8014bbeacc437681c8ef21a698fabac": "0d889801d0f0c699ac02a0369740560a",
".git/objects/4c/171305848f31accfb9839177d7d8481121a28a": "e75473bf5575f028847d688f09aba75b",
".git/objects/4c/420fa4d90c776f136ab94f513460eaf02616f5": "6cd5a79d4b9ae42dba9df0ef6b112aed",
".git/objects/4c/d6ec6a0048df57c6eb6e3ed9804926a07f10cb": "567ab759afb779db0a17a24177c1dac7",
".git/objects/4d/07a575bdd391dbe833f4c548d499156593b645": "eedbd967a6a118a4c25dca7e56a7420c",
".git/objects/4e/cce22a8f46c3e5fea8c6b289a93c324076fef3": "4ab216e6e466f88b950a863bf887b14d",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/5526821b8fadd91cfcf839267eba5b29378a3a": "2d97532fff4ebdc7d24b4bb3ec961c77",
".git/objects/52/bf212d3193353f3b9ea7818c4346dd82f45dc5": "226036937c533a35663b55929a290bc4",
".git/objects/53/2d8ce5d42b20c579862784cdcf20f308b3b938": "849714ea3052a53e49b149490e03d001",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/587d058f8d2277827ddc3f910559862d8c26c1": "0890b5b6bdede3e1cd439e6354be7467",
".git/objects/56/11dfb03ab064dd3b81beca155288d45b9b794d": "166d9d11478387d7c774db7570dd39a3",
".git/objects/56/cc60605614a110ff8cef846a7db0b2cff69f1e": "0b878017bc4ae18122968bf4c62f1239",
".git/objects/56/e200436c669943247badef310777a2825ae20e": "ced4a0991a414438cff836a7b703b6ba",
".git/objects/58/93f2e039ef714dabb1c1c45feb75ab8599c390": "1721405a5fcc72812ce5126a7c4187c2",
".git/objects/59/2879feda31cce1a2436142311209b01c2c362e": "c7c3a5a26d427749cce5da2d5d7e87c5",
".git/objects/59/b10effe73e90b2ecb11230169ba4375f10a885": "fa83611cca06d71f292def37fc90ef50",
".git/objects/5b/6552acf03024d04c57be1fb57dfe4c07dda396": "081602204d155289ad2e8301db76089c",
".git/objects/5c/c05533cbac11b7bd566c1b4fd26a6350432d3f": "3fce19ebf39a210777d01a2364f7d475",
".git/objects/5c/f3d57871cad308c78214d5a3d37343a11b1d3d": "b3576b2dac63392c8a5a4d6c9c70b795",
".git/objects/5f/23ea0567bccea7359be8e3f39775571a7a8725": "bbc2e3fadd502fd94dbcae1c21aa6617",
".git/objects/5f/e06c97b41cd6be9b10793dd888b8771b574b38": "53aeede8ae62d241e4ad64a3730ae21a",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/61/42801cdb8ce66bb948c3c0de9ad9e1c56418fb": "8956dd39a28a9b448a2abf41cea42297",
".git/objects/61/f6c2d24204ba67e7c8bbfd638b2aa254808a85": "0f783cad4ff1a8194fbd7691afc6d424",
".git/objects/62/14e441c7bc5147452bbb5467c5cad4a99b8f21": "539a013e1b204bccff5e5d5c24503e67",
".git/objects/63/861ab46bb0364b6ce36db9dec85c7e93aa15a6": "2cbb7014b67666e526b37919c308f9b3",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/65/5bf0dbba30df500c0c66cfe5e763013b3ea5de": "c0190e460ade572c0737368935011ed3",
".git/objects/67/86e935af3b8457f8177390e2f1f8b8cc046df0": "96f6ba04c2d92fa952dfa44eebc602d5",
".git/objects/67/b7fb71f4b2230fbbd6a8983e5786192552084d": "7da78ade9b1a0a5e171f21dea7b89950",
".git/objects/68/119fc9655ae2f77ebde0e7020237d02f7f5e08": "b17318230e457166ab22f1659ffea06c",
".git/objects/68/b5917e41b0e19ea86f926a8022da3af560db83": "0cefc2516270ab40fc423df244974a24",
".git/objects/69/9d321a8cf873756b46ee7b0f252ece2627bf9f": "58ad7888716c8dd23950baa5364a6f68",
".git/objects/6a/1cb140f0244fa207d8f21574f073f7a6641e1a": "9cc3692bb2fc4fc92ad5b429c4c7dc16",
".git/objects/6b/b3358ab29b329fbea62f283c460d30f421d5da": "12e25f15936badaa61dbc52061e8baf1",
".git/objects/6b/e5e8e976321ce289825fffaa6b6019e34880ca": "c041d2ee8448a72eb834c06c3211d85e",
".git/objects/6c/2431ae0cf60f7d40acae4eef37415860c30323": "26ebcb88eb3e9a8bf06d6fe54122a38c",
".git/objects/6d/28249157a6af8a9a1ae46dccc6a330b4cd66d5": "f168a6ede3caff502e9285e12eb316f9",
".git/objects/6f/8867d08458810eeeb17560e2944930f969b124": "680f8e9a944f6955f0d658582d382dc2",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/73/485a620930c4501eec2e9b275bb16b59048b4e": "667563b11e57e5d714535d70613c0ba2",
".git/objects/75/1c66a0ad8b93a131eaa8749b32be36f21e9718": "040994f57cdad52722e436ff6f573b64",
".git/objects/76/75be7b6397b74692cded839e9820bbe8d7c05a": "51cec31603729c46b3dc89be5dceb5e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cea80cbfcdc3575c67b529a94fe19378e9dfa8": "d58c67b16bd859e39be31772a9154168",
".git/objects/7e/f185acd30e8018afcddaf480980aec63ca9814": "a10db54c150e543803e081494d37d2f3",
".git/objects/7f/30912045209470ebca405bb4d033ec487dbcce": "273930ce75829a6fb6f9f10cd9631abb",
".git/objects/7f/79dd1fa4d61bb131b2fa199341400f21e21cd1": "7159de0b5492a6fe182e85f10d20fb45",
".git/objects/80/7d64d17f1b24ed7db72277afce51fec5d600c0": "12e7f3670d90153ad043f57fe7aff9c7",
".git/objects/80/8a55bb345332f5b642e8293071bfa32f1e583d": "7bfc14b7208e7473233af86ab3bd86a9",
".git/objects/80/a60598633c5af6bf7448a263d4134a4f2cf96c": "0a362a92a0c0c53d85aa48dbf3a9dde2",
".git/objects/83/3c474e7e8957797830da6ab1079fc758bdfd55": "11ad0ed55e8a0c777b1978024b04070e",
".git/objects/83/5ca505bbcd358c80b56893bf55d6e11868bcf7": "8ee54fbd734aa218c2a39f94f64c5218",
".git/objects/88/8702f4e0f41bd09e233024cae5134a7212c291": "18fbc788de916e360b07cb1c3a0d6dce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/10f4b217bb720e49c073229433dcc187384cad": "301c8bad66c0aaf6f9372f519094cb85",
".git/objects/92/23982f011dccfc8c770c4d504f2ba42bc2e61c": "3a0cf604047f382a40a37ac3dd76096f",
".git/objects/92/8cc9c14cce3938ae2b617b36dff4e17c00c9ec": "a4b0712f5cf9a0cfdc82a036fea4af6f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/13c68c642126b23424114d4b499a5b9c2b26e6": "5ee7eec1f8813cac9fdfe8699a6160d3",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/9a/9d5caa94978fb59ba9c4e6ca956287508a3f12": "87527eb7999c8520b57d3903bace56fe",
".git/objects/9c/ee73cbb6db0b4217acecd42f89aeff5ba80648": "d2d7fbf3739067ba4c0be47d98a8ed28",
".git/objects/9d/b3dfff27e8082bc6ac0bc44a58bb6d01c38b3c": "564ba11dcd9674b68a2f6de3dd0ce9d1",
".git/objects/9f/052b7bf64f2764745d6bff5a5e0312ed1b395c": "4d4094f5db801c0e4bd5ea561126290d",
".git/objects/9f/48ace210eae48642941a5937991d7dce64fff7": "f98c39e0d086699378ac1e3caf3d8dc8",
".git/objects/a0/06a3ebc2c848adb118ae9d400e6443608e5962": "6a559c9450b1fdd3e5799b4924513330",
".git/objects/a0/903496d24e16a99ee3bfe800d130ec790c9441": "cf092cdb7a2d34efa5c0306730423b63",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/03cae4cfe11f439b75ffad147a91f69f2c9125": "752b5317a379d6decc2864f3dd6926ae",
".git/objects/a2/350501aa0f7d57be445f03dd8f9865719e04ce": "607c967df6c18e0d3915b708b46af39b",
".git/objects/a2/4c0ff9d56a80fafb19c7843a33e5bcdbd86e8d": "ec09e3494e8683e16208304baa79b356",
".git/objects/a4/5b59493a15e0b0cf0e146993032464c1338d99": "68aa1f14a5669ba39390ca72888b63b9",
".git/objects/a4/d2045ff0680f2c0cd7abe823e9a2bc8d09400a": "9ef0add98ab911dac6f168140073f413",
".git/objects/a8/96e3c0db17391f0affcc5720b353361de89f37": "230223f48cc3fe4c32371294dffcc1bf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/ead848e9980f236eb435f53486a4fb8d361b66": "0942bd519217e3bf97ec4bf72924a174",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/6e822a16424f80cef71631f19f66baf0ac9a81": "8eeb909039c931506c422c1e6125cd04",
".git/objects/ad/f05e37b55b0daa057119154d1e31b82b4add76": "49c022af0b324c0a5f46bb291f222809",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/ae/c78d80c6b412c2b4c2b95cb5135a19769ea78f": "5faa3bd461cf5d1b683a8b38ef875186",
".git/objects/af/21d89b820dd5ed076ee2d3950eb691eade8511": "904beed813ab59e9bec2f8327ce9757c",
".git/objects/af/64a0edae0830c96b81b2fae089c65b8107a33e": "0758ec68793e3001a43df49797175280",
".git/objects/b0/3eef5df4527bca9de85e829c7902fad6ab768c": "4a859d77afc85e9d9368beac333dfd64",
".git/objects/b0/8016fe541ca6a2a53d16aa25180aa1e5d255bc": "26395c9068f7bdd244ebdf8cbf21ae93",
".git/objects/b0/a140593d683d58811fa6067f96040c21c14ed0": "f5136b57009ff0d95b4430ef276fe540",
".git/objects/b1/c578570e9181462130154bf5f4de334470ae3b": "e2d81550027768b4c28bfd15e162ce5c",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b4/5bdfcea12524dcdd0506ea16079687eb91b8e8": "3eb19eef8a765078c57495c04d86c3fc",
".git/objects/b5/400cce237ec1d5356e7c916f06d609da30e16f": "044198b32e96e1b3994d26f76e6cd33d",
".git/objects/b5/7f127223020d84e693025cbceab3c8701e1674": "a07c08476fe87355bf608ada43751249",
".git/objects/b5/e974f9420d874e7da3463dd3d3821b05f1280f": "3b5f57c8e47b5040be576f590234a8e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8546e959a6f63643478159ac9fee84dec0255a": "5a86f88a6ee789391d0659be02dc1534",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/bd/a6c2f8061a58673f8081d18c90eeaf589d1941": "766b41a496942343afc366350d6489fa",
".git/objects/be/28f5ca9768a1ef563b5a281170dc7678b40503": "fe6cc1f7f13454a7dc720d58fd6ada3b",
".git/objects/be/713c2a3326933c77a71d71511e22f4332bdfff": "2a73b6ea451d45a9cf5f2de775eff5fa",
".git/objects/bf/294c9a0ddf7b88e64045985fce56bfe94d14a0": "513c084c1cbe94281d702774ada224c8",
".git/objects/c0/dcf0617d38644a3472234ff54b3f697848ab49": "a076c64ff8f8a1fa03796761b03c1f76",
".git/objects/c1/105c222d88624f95cbad3c52e7cb75900a2677": "c4b8f7f84d94087a2d494d59cb4f6ef4",
".git/objects/c1/f7686375a08f1f7bddabdb2eb8d851978fdbee": "5556df22275e45e47787c058d6dbbfd0",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c8/ada5aa1e6d33db307c13795f32918ed46b9d85": "06ec982d18b3c25b0cd0b47e2c258576",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/c9a1df1872634ab186acc404beb61d677f5621": "796d0f8295e7a919046d420e70da0ae8",
".git/objects/cf/52f2f772d9a8d798b6ceae000369b22daa0b88": "d89b890d0ad4047d80d5420c66c877d5",
".git/objects/d0/5f057fff6cb495ede911023b32d11acae7701c": "7dab02cb748f30bd7a5bd07ecaf4816e",
".git/objects/d2/03f43211f2a4e41901a30346273af16af359ec": "f6b195866666982a46041e6d78da9414",
".git/objects/d4/bb603ea61f58abb5a866f25d59e3c701c94d70": "12b6f10340f9e54bb81090af15ce5573",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/00c4dc1f537d32d4b182c61db4e0ae2f3bb8a7": "67fcb32edee82b6834614bcd6880ab7f",
".git/objects/dc/711c9028aedf70c98f8338f9d47ea9cbb46163": "946210cb9139aff8d9c6d12e9e3ae264",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/df/4d81ca94c023944848df6c06c0b8fd52039abc": "e1ef6d748e62cebc73b32a5adf95706e",
".git/objects/df/52b5f604f161757d85d573c765f0f809f20bc9": "0915f2cc4f98571217de1b066ae0f25a",
".git/objects/df/6e8e753796643cbe7a9e224e8ba4a886d3cf48": "79dc74c7692c181832d38603bdc0de86",
".git/objects/df/cb6a201b2f958dca9172fffa0c05a6ddf1c3e3": "cb75f13c39b6ff70367aae167c645c5a",
".git/objects/e0/57e735a59ff4f4a32d4f05121641a23c98cc63": "7d5d34e6a8fec81a2b4b9cb2911c8f6a",
".git/objects/e1/eab2d9fd5c5c3561253117246f0d62d93bdf32": "925f1278d8e66ee3544f8620f2272e84",
".git/objects/e3/0462889de920ea1aefbf8ca2e72479e2db1292": "6a2d7e811eb1250c9db67bec175991a7",
".git/objects/e3/228da994d5a77ab46b7ea6dd2316ab3762dab9": "14cddb81cc0d1562b00195161165ad24",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b271f5fd2e9ff8fe6de383cda649dce424ef09": "016a87fe357ab11537175fef747fa9f1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/07b434002676d21c7728939f4fa30c0da71de9": "b4d102dbc200bc20073c5a05ff6ea2eb",
".git/objects/e9/159bc04ac4083be4db27e287f29415150d4bf6": "4798b2a6d284fdbf1008a2c3525fc0d5",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/eb/014d50aad140d3573b6c19ed0fcf5d2c521adf": "8009f299e68801bad76a5072885f71aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/67c0413faacf4496c1b8b7dca6fa28bac0bbdd": "01f0e250465b6075b0a2cb3a5e55d2c0",
".git/objects/ed/00ca69ff96593c5c02a91e77e66ee340e62f31": "7924fb12046ce5b5ac790c006e7995f8",
".git/objects/ef/1fdb414c6a0ce60505e9e3d2b247b81ac93124": "8a04fdee7685e087b0b7f2ab3501efbf",
".git/objects/f2/66361b19083337a1366506d844e20f5cb6fa8a": "9dfa81c2a04031f41781f9c8092f158f",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f4/6e2d3d831bcfa71c5c08766b65f0cd1080ea78": "5e9c7fb4dee54843fcff89c6c92c852d",
".git/objects/f5/ca3c6a6ae64007ccfe9abf7ac681822b4e90c5": "3622744443949e5d5c3995b78ee45729",
".git/objects/f8/0bddcf944130bfc5832ac74c7ba30555d9b230": "e0083eab810813854b529d37f07e184d",
".git/objects/f8/f3b645aed981a2a328c7222dfd2db415b36511": "80d327d80222bc08a5a9bfa6c66847af",
".git/objects/f9/3914f83692dd61b25628b16a0a3c7b19dcf2a9": "63c075bc58bccaca4315e51d1f81dfb9",
".git/objects/fa/2cc389fccf122154cd6dd21c3d137d64df9f9d": "51d444f2a752e19cd3da12875bb229e9",
".git/objects/fa/85a1678dadb15347a5b4531141937b43aa54d5": "cb7232f2f6eabea3ba9a69521c442df9",
".git/objects/fb/501bbb32fa41e4acbab175625e7f745f5de335": "e427eb5aedfef6fb30d32f176b6b789c",
".git/objects/fb/b329a7521f84341be2c849bb269acf8f0c4317": "5b33da263cbe4b3d7c10630e622f16e7",
".git/objects/fb/c20edaf70cba36c4022b6b79fec81f574da77f": "b188176b8be72cbd05c0defdea1dde15",
".git/objects/fc/005c80d1142be40e10622669bbf7564c545521": "841559298a9392891c172f5cfedb67d8",
".git/objects/fc/4664c542ccd2e285f03bedf02966846917cda7": "f3b181c1351ec23da67b9833959a2150",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/62410fbf5c257d011e6050923fde6474b478ad": "3714bf3d2b58489cb72159ba89592e94",
".git/objects/ff/566e81afa987315b2e68a0a8dd90d7cd0ecedf": "db92cbd4b78ef85c53663a99cef0a40a",
".git/objects/ff/71fcbb0c517eae67e9060d340ec9aa470349c7": "353e27c3866d1b1b2b5f2b8394967e80",
".git/objects/ff/f9e1b1dc9f461aefe12aaa3db765d0bb73f119": "6be9ed5eabe20a049ffe34225a5532fa",
".git/refs/heads/main": "caceb28f43785ab4aea9b1aa560e9481",
".git/refs/remotes/origin/main": "caceb28f43785ab4aea9b1aa560e9481",
"assets/AssetManifest.bin": "b966541a0d5622910d09d8fa9370b0ea",
"assets/AssetManifest.bin.json": "011bb86785b37ef16ffaff878bf37a67",
"assets/AssetManifest.json": "fdaa8c22b41a8f7d42084f56a5f3dd1e",
"assets/assets/get_widget/fonts/gfFontIcon.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/assets/get_widget/fonts/gfFontIcons2.ttf": "c9ef8acf5e1ace6c92a0e10a248d1301",
"assets/assets/get_widget/fonts/gfIconFonts.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/assets/get_widget/fonts/gfSocialFonts.ttf": "5a1143342f752421c630287be36ae69f",
"assets/assets/get_widget/fonts/loader.ttf": "9396dc647e6477f7cda08a483e15ef22",
"assets/assets/get_widget/fonts/new.ttf": "ccaf51a99c12842917c815105e0e2254",
"assets/assets/get_widget/fonts/newcomp.ttf": "53913d674b8d188b08746ef81dfe1931",
"assets/assets/get_widget/gif/success1.gif": "7bd1c7b13375ee3f3a920813e7542777",
"assets/assets/get_widget/icons/allign.png": "baa83ecfb8090f30bf47920d2e824be5",
"assets/assets/get_widget/icons/gflogo.png": "5aae5e6009c7edd48cfc3a87dbafbb8d",
"assets/assets/get_widget/icons/Rotation.png": "eefd5fb7e73232129fb9a62d2d794009",
"assets/assets/get_widget/icons/scaling.png": "0a7d35039a84218dd4b21d0860c7f1f5",
"assets/assets/get_widget/icons/size.png": "7cba1be9a69efa2a89264a05c4408da7",
"assets/assets/get_widget/icons/slide.png": "33dc78e8959bbde2f23ff21bfd6283fa",
"assets/assets/get_widget/images/avatar.png": "160bace2c15c0975e7460e2e26d1a2ef",
"assets/assets/get_widget/images/avatar1.png": "417ca1e7c2e4c314e3cc5158f28f868e",
"assets/assets/get_widget/images/avatar10.png": "6c877e7e4f78b781542cc1799d649226",
"assets/assets/get_widget/images/avatar11.png": "395b633f4e79f932d44d3e98bd0a8f08",
"assets/assets/get_widget/images/avatar12.png": "3f37d9e56589b3e2322d1be7057d61d8",
"assets/assets/get_widget/images/avatar2.png": "a511346e698e2db2321a93f02f152bc3",
"assets/assets/get_widget/images/avatar3.png": "087106515e87184cfe61d7b2fb69d204",
"assets/assets/get_widget/images/avatar4.png": "e81e2572ed424f60ab58d3f3c0341920",
"assets/assets/get_widget/images/avatar5.png": "7f7d935b024eceaf622cfe15b0251458",
"assets/assets/get_widget/images/avatar6.png": "3a14e44027a207806742fc267e896997",
"assets/assets/get_widget/images/avatar7.png": "5fb1556b2db6068fbb156f27189fe7ba",
"assets/assets/get_widget/images/avatar8.png": "1c8a9564f422f21cb2795e1b61535004",
"assets/assets/get_widget/images/avatar9.png": "048cbe49fe8510b74b6edf900ed50c2a",
"assets/assets/get_widget/images/card.png": "9f9e951085c76c9bc78e22e3011b0e3d",
"assets/assets/get_widget/images/card1.png": "567236e50514346cf68c33eb87f7482b",
"assets/assets/get_widget/images/card2.png": "9970da5163bf4e64bd34092ac6a5dcaa",
"assets/assets/get_widget/images/card3.png": "67e41d3a7039cc457ebc8ee43173779b",
"assets/assets/get_widget/images/card4.png": "040d69ccd720f48f647a0e053535bc4a",
"assets/assets/get_widget/images/card5.png": "d511850917d87790ba9a952b01ff8df6",
"assets/assets/get_widget/images/e1.png": "4f15642bd2e7971af55ce4d8f1ce75b2",
"assets/assets/get_widget/images/e2.png": "33bd98f5f1ca9346d0d51291f634acb6",
"assets/assets/get_widget/images/e3.png": "7d40970fa613789fe5f6d85f0ef60656",
"assets/assets/get_widget/images/e4.png": "e96a6b484658ef4d78e442970617a5a4",
"assets/assets/get_widget/images/e5.png": "f7c688dfa6e42b5c119d1652fabb61c4",
"assets/assets/get_widget/images/gflogo.png": "3de21daa0f3786271be9ebf504585fdc",
"assets/assets/get_widget/images/i1.png": "0c177ef172fddb4d28c8ef0102f88425",
"assets/assets/get_widget/images/i2.png": "c3a4c555a3f22ec8721d97b04116e003",
"assets/assets/get_widget/images/i3.png": "30c4aac4f475af62da292d9b49255c63",
"assets/assets/get_widget/images/i4.png": "6aebf6e04ccc484fcc4cf20fb808e192",
"assets/assets/get_widget/images/image.png": "3eb34f864965bfaf9160f826440a607f",
"assets/assets/get_widget/images/image1.png": "56aa3e67728dd2d07d925de31aaa1714",
"assets/assets/get_widget/images/image2.png": "6a00bfe0b0c50f0be10830c5026baea9",
"assets/assets/get_widget/images/img.png": "b0b8ee63d4f6d910a28ade1b5beb9bad",
"assets/assets/get_widget/images/img1.png": "292096bb7c7d6f825ddf075fad0ff05c",
"assets/assets/get_widget/images/img2.png": "969ca951b459278ace4ba486cf5cfcef",
"assets/assets/get_widget/images/orange.png": "86e7cfb109b64c5789d947e11b221076",
"assets/assets/get_widget/images/pink.png": "0664cd7e75c65f931da7c3c483f489bc",
"assets/assets/get_widget/images/purple.png": "029dd59f2ae8341fc5d640fcccbe1447",
"assets/assets/get_widget/images/red.png": "8a6a835dd2526ef01aec07f4ca8792d8",
"assets/assets/get_widget/images/s1.png": "c4bed48b6d6bc21248ef5c53c97dc82f",
"assets/assets/get_widget/images/s2.png": "8e49821a4b3b885dfdf0d5c6035c1534",
"assets/assets/get_widget/images/s3.png": "7def28d2cef6c4a6807845102b525475",
"assets/assets/get_widget/images/s4.png": "065d2f8890d084214d5fe25506bf16c1",
"assets/assets/get_widget/images/s5.png": "bac18c287da83eb39be609153c29aa33",
"assets/assets/get_widget/images/story.jpg": "f9ae374b68fa428428853ac3ffb871e2",
"assets/assets/images/jpg/cv_image_1.jpg": "c0b9691d2f43b6e12c07bfbc84be0d20",
"assets/assets/images/jpg/image.jpeg": "476a19e5502c0a8c368babaf2f941df1",
"assets/assets/images/png/bg.png": "a7ba7a41e1adaf53a018ddc0cfb5621f",
"assets/assets/images/png/cover_audio_default.png": "7569a8aa08adef2f75c38b200854b504",
"assets/assets/images/png/cover_audio_trivia.png": "95b0e3902a2db12cc33825c847204980",
"assets/assets/images/png/Facebook.png": "f56462b45707e0ce2d5df258e84a508a",
"assets/assets/images/png/flutter-dash.png": "4d895fa95237f86d36d632b332b7dd7d",
"assets/assets/images/png/Gmail.png": "4f2b00d3fa43fdb7546d7b0593cd41fe",
"assets/assets/images/png/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/images/png/Telegram.png": "202c8d744a041d558d8d8c4378c66f8e",
"assets/assets/images/png/WhatsApp.png": "ea1c4e0964af413e526d1575cd999576",
"assets/assets/lottie/404.json": "e8362828f9a7b18198f4a6669da99c34",
"assets/assets/lottie/developing.json": "ab5e7a4957ff4a25ef4da6cc5a41db76",
"assets/assets/media/audio/audio.m4a": "046109fd7416d114e70e1d38674cd0af",
"assets/assets/media/audio/audio2.m4a": "3a7e862931b7e1abd0ef1b0d2c86aabd",
"assets/assets/media/video/video.mp4": "82d9b86b01560ce17d310f3fd2a79ca9",
"assets/assets/media/video/video2.mp4": "5f1bd46af2a0c62cfcf46747bd0c0972",
"assets/assets/spectrum/bored.png": "2d862c09beb63156da9eba2e24ee26f9",
"assets/FontManifest.json": "b66964971321d2cd77aed523e91aca0b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8e2e0932f6f2054d2a922e6933a3d273",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "9e96d8940f514213a73840721f0b5c1d",
"assets/packages/flutter_osm_web/src/asset/map.js": "c69b4d778b3081d4d3b353d1786a9ea8",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb97a055cb0e4ff0e42c36fd28239cec",
"/": "bb97a055cb0e4ff0e42c36fd28239cec",
"main.dart.js": "c63cbc66e93da2c83d76b39dedeeb488",
"manifest.json": "702ba0f9e25dc70f6094da332bedfcf0",
"version.json": "0d1027b8a8cdcfd16c916b708a4805a4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
