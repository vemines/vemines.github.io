'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
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
".git/index": "f899d43f354d78af4e8324731d3df1f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d594e8ef2965d3e391bc3659e7b83ee",
".git/logs/refs/heads/main": "7d594e8ef2965d3e391bc3659e7b83ee",
".git/logs/refs/remotes/origin/main": "5d666dd922a74e8aee4c38ff7805623e",
".git/objects/02/d93bc14d7aa05f1423122c6bc50f47e5deb316": "23ac8d9ef8cae9a8321554f76ce6d26e",
".git/objects/04/99afece8caef9abde9cad472aa55db563a1db3": "38681fa47f84b16fdaf1802758364246",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
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
".git/objects/10/7dd8a9f3450b8b58b63ffc70b217c752c700db": "cea9c7df22829a1b72c37e4c17e16011",
".git/objects/12/737fde833bfa41a29fa7d3e0894eb7c67bd2b1": "94e8e8f1c82455b12bbfcb61d3858e5e",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/19/8b09ef449f8c7bcc5b74325dc8d0d696943af7": "3be7f2975c4977e1f87cc3b5e8f3d397",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/8d851e3fe87917472d36ade0e86a7488e8cbb2": "e9be16c504d02e0474e1903f0696fda5",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/28/40e5ccae353e443bf84c755c627093f1940bff": "1ebe8a15e14bd59e7214f40e464a1620",
".git/objects/28/4665bd40a6b14e456f119e9f1774190b008d15": "33ff5e0a99e7abf4b3bd33d1e5914335",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/2a/4de1f3f6026bfa5c98906f0105c73b84fb5568": "ac43981489052747cde9c151663dc01e",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/e0b171f874d71ef0990931455ca54bfa2d7dc1": "91671a50895b49364734b4ca306462cd",
".git/objects/2f/008e32e4675990f2f4ced770afdbd133a676ce": "660bb39e1cf33aa5d657572e8260801d",
".git/objects/2f/0fe52f8907359f158127c90c0a41b5f8a4caca": "d7f437121d2ff2d9b564304aef271bd5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/32/74234d0ce84eec8c650c166942878e61dbe238": "7f46b1b3ca225f25b4f01509a5f8fc94",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/32/ab471d3756021bb17a0854ef01e06d814245cd": "fa90d247d07e81f0ccbdf594ab183904",
".git/objects/33/7bd5c4ecfd78a3ed8121956f8b2c3d42a62954": "21fcf27164f04cf16c82c4f45a706011",
".git/objects/34/54e3f97af41e3489725a03b7c38c721619348f": "eeec2d9f0d8bfcd9850886c8be1c93ac",
".git/objects/34/c9a1c98615edce95cdab8b7be0ca124b1c268c": "e81deea891108db130c7d80741d41ef0",
".git/objects/36/7df56450b8ae4e0f06ff9c7a0edf3c5a3e3c20": "fa44a991132a080e7cb9c3e3a401f4fa",
".git/objects/37/59181ffd23fec980678fd800327f437d3161dd": "bf97d98e5f241e85300f3b6286f1572d",
".git/objects/37/d1f46e95e4de0e4e66b8a8edb3066a6ab5a4ea": "2b4cb498524ab6aead3fca5a22ca67af",
".git/objects/38/88cad5c8be767bc77bdf5c0bff089bab71f0c2": "58a7c67dfa0ec1c06f8009b80360b041",
".git/objects/39/1538c3b8630fc19f42027299a96a90b1c00b8d": "3e7fbe3d50da1bb21cde94c3c2af0c9f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9131fbf14c32047e7d6ab276f0e5c75e0afcc7": "20864bddc60f82bf44e44ec5aeee69a3",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3b/07dce2afeaf7294f783dc622ec338b7c9fc13d": "58cead53bf66716481878250a19a0a5e",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/3d/3b919be3f8370fc08db57662e5c9e76884a006": "b4152f26d848af9aabc5b20cbf89ce99",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/40/cb2b108c82231b8e68f87bf6ba59f4184d44fa": "a404146a36f0bd696b18feeb03e1e579",
".git/objects/43/8fd08597f202e38cd6e64b775a3a38e637d89a": "be24790963f69f71be7fbe3ac8d7a8cc",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/c19d114a28b3068e051ef692b3d0c470c9e6ca": "df509f9050167b62d0cf993b34bdfe25",
".git/objects/46/b2dcc489da8f90cbeaa916b72e00e87160dc61": "2bc5817c7ff74aaf44c0798beb7d9d3a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/7c3261f6a46655a47a2e9d78a9567dedf9ae56": "f1445b11e00542313933994e4192a022",
".git/objects/4a/4a34d874e1a460f95adadc9c57cb3e8b36de96": "f9c311f00c203ae278789d16506e33b7",
".git/objects/4a/74876a9acb1aa3c0f3033667ef844cd3178b3b": "185b9dde5d69c0b15075d4d4659414b3",
".git/objects/4c/d6ec6a0048df57c6eb6e3ed9804926a07f10cb": "567ab759afb779db0a17a24177c1dac7",
".git/objects/4e/cce22a8f46c3e5fea8c6b289a93c324076fef3": "4ab216e6e466f88b950a863bf887b14d",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/bf212d3193353f3b9ea7818c4346dd82f45dc5": "226036937c533a35663b55929a290bc4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/cc60605614a110ff8cef846a7db0b2cff69f1e": "0b878017bc4ae18122968bf4c62f1239",
".git/objects/56/e200436c669943247badef310777a2825ae20e": "ced4a0991a414438cff836a7b703b6ba",
".git/objects/59/2879feda31cce1a2436142311209b01c2c362e": "c7c3a5a26d427749cce5da2d5d7e87c5",
".git/objects/59/b10effe73e90b2ecb11230169ba4375f10a885": "fa83611cca06d71f292def37fc90ef50",
".git/objects/5b/6552acf03024d04c57be1fb57dfe4c07dda396": "081602204d155289ad2e8301db76089c",
".git/objects/5c/c05533cbac11b7bd566c1b4fd26a6350432d3f": "3fce19ebf39a210777d01a2364f7d475",
".git/objects/5f/23ea0567bccea7359be8e3f39775571a7a8725": "bbc2e3fadd502fd94dbcae1c21aa6617",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/61/42801cdb8ce66bb948c3c0de9ad9e1c56418fb": "8956dd39a28a9b448a2abf41cea42297",
".git/objects/61/f6c2d24204ba67e7c8bbfd638b2aa254808a85": "0f783cad4ff1a8194fbd7691afc6d424",
".git/objects/62/14e441c7bc5147452bbb5467c5cad4a99b8f21": "539a013e1b204bccff5e5d5c24503e67",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/65/5bf0dbba30df500c0c66cfe5e763013b3ea5de": "c0190e460ade572c0737368935011ed3",
".git/objects/67/86e935af3b8457f8177390e2f1f8b8cc046df0": "96f6ba04c2d92fa952dfa44eebc602d5",
".git/objects/67/b7fb71f4b2230fbbd6a8983e5786192552084d": "7da78ade9b1a0a5e171f21dea7b89950",
".git/objects/68/119fc9655ae2f77ebde0e7020237d02f7f5e08": "b17318230e457166ab22f1659ffea06c",
".git/objects/69/9d321a8cf873756b46ee7b0f252ece2627bf9f": "58ad7888716c8dd23950baa5364a6f68",
".git/objects/6b/b3358ab29b329fbea62f283c460d30f421d5da": "12e25f15936badaa61dbc52061e8baf1",
".git/objects/6b/e5e8e976321ce289825fffaa6b6019e34880ca": "c041d2ee8448a72eb834c06c3211d85e",
".git/objects/6c/2431ae0cf60f7d40acae4eef37415860c30323": "26ebcb88eb3e9a8bf06d6fe54122a38c",
".git/objects/6d/28249157a6af8a9a1ae46dccc6a330b4cd66d5": "f168a6ede3caff502e9285e12eb316f9",
".git/objects/6f/8867d08458810eeeb17560e2944930f969b124": "680f8e9a944f6955f0d658582d382dc2",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/73/485a620930c4501eec2e9b275bb16b59048b4e": "667563b11e57e5d714535d70613c0ba2",
".git/objects/76/75be7b6397b74692cded839e9820bbe8d7c05a": "51cec31603729c46b3dc89be5dceb5e2",
".git/objects/7c/cea80cbfcdc3575c67b529a94fe19378e9dfa8": "d58c67b16bd859e39be31772a9154168",
".git/objects/7e/f185acd30e8018afcddaf480980aec63ca9814": "a10db54c150e543803e081494d37d2f3",
".git/objects/7f/79dd1fa4d61bb131b2fa199341400f21e21cd1": "7159de0b5492a6fe182e85f10d20fb45",
".git/objects/80/a60598633c5af6bf7448a263d4134a4f2cf96c": "0a362a92a0c0c53d85aa48dbf3a9dde2",
".git/objects/83/5ca505bbcd358c80b56893bf55d6e11868bcf7": "8ee54fbd734aa218c2a39f94f64c5218",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/23982f011dccfc8c770c4d504f2ba42bc2e61c": "3a0cf604047f382a40a37ac3dd76096f",
".git/objects/92/8cc9c14cce3938ae2b617b36dff4e17c00c9ec": "a4b0712f5cf9a0cfdc82a036fea4af6f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/9a/9d5caa94978fb59ba9c4e6ca956287508a3f12": "87527eb7999c8520b57d3903bace56fe",
".git/objects/9c/ee73cbb6db0b4217acecd42f89aeff5ba80648": "d2d7fbf3739067ba4c0be47d98a8ed28",
".git/objects/a0/06a3ebc2c848adb118ae9d400e6443608e5962": "6a559c9450b1fdd3e5799b4924513330",
".git/objects/a2/03cae4cfe11f439b75ffad147a91f69f2c9125": "752b5317a379d6decc2864f3dd6926ae",
".git/objects/a2/4c0ff9d56a80fafb19c7843a33e5bcdbd86e8d": "ec09e3494e8683e16208304baa79b356",
".git/objects/a8/96e3c0db17391f0affcc5720b353361de89f37": "230223f48cc3fe4c32371294dffcc1bf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/ead848e9980f236eb435f53486a4fb8d361b66": "0942bd519217e3bf97ec4bf72924a174",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/f05e37b55b0daa057119154d1e31b82b4add76": "49c022af0b324c0a5f46bb291f222809",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/ae/c78d80c6b412c2b4c2b95cb5135a19769ea78f": "5faa3bd461cf5d1b683a8b38ef875186",
".git/objects/af/21d89b820dd5ed076ee2d3950eb691eade8511": "904beed813ab59e9bec2f8327ce9757c",
".git/objects/af/64a0edae0830c96b81b2fae089c65b8107a33e": "0758ec68793e3001a43df49797175280",
".git/objects/b0/8016fe541ca6a2a53d16aa25180aa1e5d255bc": "26395c9068f7bdd244ebdf8cbf21ae93",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b4/5bdfcea12524dcdd0506ea16079687eb91b8e8": "3eb19eef8a765078c57495c04d86c3fc",
".git/objects/b5/7f127223020d84e693025cbceab3c8701e1674": "a07c08476fe87355bf608ada43751249",
".git/objects/b5/e974f9420d874e7da3463dd3d3821b05f1280f": "3b5f57c8e47b5040be576f590234a8e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/bd/a6c2f8061a58673f8081d18c90eeaf589d1941": "766b41a496942343afc366350d6489fa",
".git/objects/be/28f5ca9768a1ef563b5a281170dc7678b40503": "fe6cc1f7f13454a7dc720d58fd6ada3b",
".git/objects/c1/f7686375a08f1f7bddabdb2eb8d851978fdbee": "5556df22275e45e47787c058d6dbbfd0",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c8/ada5aa1e6d33db307c13795f32918ed46b9d85": "06ec982d18b3c25b0cd0b47e2c258576",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/52f2f772d9a8d798b6ceae000369b22daa0b88": "d89b890d0ad4047d80d5420c66c877d5",
".git/objects/d2/03f43211f2a4e41901a30346273af16af359ec": "f6b195866666982a46041e6d78da9414",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/df/cb6a201b2f958dca9172fffa0c05a6ddf1c3e3": "cb75f13c39b6ff70367aae167c645c5a",
".git/objects/e3/0462889de920ea1aefbf8ca2e72479e2db1292": "6a2d7e811eb1250c9db67bec175991a7",
".git/objects/e3/228da994d5a77ab46b7ea6dd2316ab3762dab9": "14cddb81cc0d1562b00195161165ad24",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/159bc04ac4083be4db27e287f29415150d4bf6": "4798b2a6d284fdbf1008a2c3525fc0d5",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/ca3c6a6ae64007ccfe9abf7ac681822b4e90c5": "3622744443949e5d5c3995b78ee45729",
".git/objects/f8/0bddcf944130bfc5832ac74c7ba30555d9b230": "e0083eab810813854b529d37f07e184d",
".git/objects/f8/f3b645aed981a2a328c7222dfd2db415b36511": "80d327d80222bc08a5a9bfa6c66847af",
".git/objects/fb/501bbb32fa41e4acbab175625e7f745f5de335": "e427eb5aedfef6fb30d32f176b6b789c",
".git/objects/fb/c20edaf70cba36c4022b6b79fec81f574da77f": "b188176b8be72cbd05c0defdea1dde15",
".git/objects/fc/4664c542ccd2e285f03bedf02966846917cda7": "f3b181c1351ec23da67b9833959a2150",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/62410fbf5c257d011e6050923fde6474b478ad": "3714bf3d2b58489cb72159ba89592e94",
".git/objects/ff/71fcbb0c517eae67e9060d340ec9aa470349c7": "353e27c3866d1b1b2b5f2b8394967e80",
".git/refs/heads/main": "f5e45d2256f91cdc1538e5c8fc8869a5",
".git/refs/remotes/origin/main": "f5e45d2256f91cdc1538e5c8fc8869a5",
"assets/AssetManifest.bin": "92fe184c1c49a98281fa387249f0a968",
"assets/AssetManifest.bin.json": "47224822a79510406943b0167a440f93",
"assets/AssetManifest.json": "85fd5306fc4ec0a09d65bca526c6d29d",
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
"assets/assets/images/png/bg.png": "a7ba7a41e1adaf53a018ddc0cfb5621f",
"assets/assets/images/png/cover_audio_default.png": "7569a8aa08adef2f75c38b200854b504",
"assets/assets/images/png/cover_audio_trivia.png": "95b0e3902a2db12cc33825c847204980",
"assets/assets/images/png/Facebook.png": "f56462b45707e0ce2d5df258e84a508a",
"assets/assets/images/png/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/lottie/404.json": "e8362828f9a7b18198f4a6669da99c34",
"assets/assets/lottie/developing.json": "ab5e7a4957ff4a25ef4da6cc5a41db76",
"assets/assets/media/audio/audio.m4a": "046109fd7416d114e70e1d38674cd0af",
"assets/assets/media/audio/audio2.m4a": "fcd9ff8368f1afeefba91f29b9c4e681",
"assets/assets/media/video/video.mp4": "a72870d76582fc5e994ebecb80e4fba4",
"assets/assets/media/video/video2.mp4": "f41e4c699b21d0d2d26d44f70a5f30ac",
"assets/assets/spectrum/bored.png": "2d862c09beb63156da9eba2e24ee26f9",
"assets/FontManifest.json": "b66964971321d2cd77aed523e91aca0b",
"assets/fonts/MaterialIcons-Regular.otf": "aca17d4d7351ddc7b5802123b693145f",
"assets/NOTICES": "6c808af27a9c6560ba40bf8fe6feb3c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"index.html": "62e27e091ab5ed8629e3c4db1bdaace7",
"/": "62e27e091ab5ed8629e3c4db1bdaace7",
"main.dart.js": "5054a0f5c99ac85d83b545ba61d6d8ec",
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
