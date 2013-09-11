task :server do
  require 'webrick'
  document_root = File.join(File.dirname(__FILE__), 'public')

  server = WEBrick::HTTPServer.new({
      :DocumentRoot => document_root,
      :BindAddress => '0.0.0.0',
      :Port => 8000
    })

  ['INT', 'TERM'].each {|signal|
    Signal.trap(signal){ server.shutdown }
  }

server.start
end
