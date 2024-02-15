from flask import Flask, request, render_template
import yfinance as yf

app = Flask(__name__, static_folder='.', static_url_path='')

entered_string = []

@app.route('/')
def index():
  return app.send_static_file('index.html')

@app.route('/stock.html', methods=['GET', 'POST'])
def submit():
  if request.method == 'POST':
        ticker_symbol = request.form['textarea']
        stock_data = yf.Ticker(ticker_symbol)
        company_name = stock_data.info['longName']
        historical_data = stock_data.history(period="1d")
        close_price = historical_data['Close'].iloc[-1]
        symbol = stock_data.info['symbol']
        # to_return = 'Price for ' + company_name + " is: " + str(close_price)
        entered_string.append({'symbol': symbol[0:4], 
                               'name': company_name, 
                               'price': close_price})
        # entered_string.append(to_return)
  return render_template('stock.html', entered_string=entered_string)

if __name__ == '__main__':
  app.run(debug=True, port=5500)
  