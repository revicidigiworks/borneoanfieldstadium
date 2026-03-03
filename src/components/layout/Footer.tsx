export function Footer() {
    return (
      <footer className="bg-black text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm opacity-70">
            Untuk seluruh BASTION.
          </p>
          <p className="text-xs mt-4 opacity-50">
            © {new Date().getFullYear()} Borneo Anfield
          </p>
        </div>
      </footer>
    )
  }