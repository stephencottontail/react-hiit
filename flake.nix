{
  description = "Example JavaScript development environment for Zero to Nix";

  # Flake inputs
  inputs = {
    # Latest stable Nixpkgs
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0";
  };

  # Flake outputs
  outputs =
    { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems =
        f:
        nixpkgs.lib.genAttrs allSystems (
          system:
          f {
            pkgs = import nixpkgs { inherit system; };
          }
        );
    in
    {
      # Development environment output
      devShells = forAllSystems (
        { pkgs }:
        {
          default = pkgs.mkShell {
            # The Nix packages provided in the environment
            packages = with pkgs; [
              nodejs_22 # Node.js 22, plus npm, npx, and corepack
              pnpm
              git
              typescript-language-server
            ];

            shellHook = ''
              export npm_config_cache="/Users/stephen/Documents/Projects/react-hiit/.cache"
              export NODE_ENV="development"

              pnpm config set store-dir /Users/stephen/Documents/Projects/react-hiit/.cache
            '';
          };
        }
      );
    };
}
